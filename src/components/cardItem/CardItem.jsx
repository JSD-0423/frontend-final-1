import { Box, Rating, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import IconBtn from "../iconBtn/IconBtn";

const CardItem = ({
  cardWidth,
  imageHeight,
  imageWidth,
  imageBorderRadius,
  imageObjectFit,
  productName,
  productType,
  price,
  prices,
  icons,
  cardItemPseudoIconId,
  image,
  fontColor,
  ratingStars,
  pRating,
  location,
}) => {
  const theme = useTheme();

  return (
    <Box width={cardWidth}  flexShrink={0}>
      <Box width={imageWidth} height={imageHeight} mb={1}>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: imageObjectFit,
            verticalAlign: "middle",
            borderRadius: imageBorderRadius,
          }}
          src={image}
          alt={productName}
        />
      </Box>
      <Stack width="100%" direction="row" justifyContent="space-between">
        <Box width="90%">
          <Typography
            variant="body1"
            noWrap
            color={fontColor}
            fontWeight={{ xs: "600", md: "500" }}
            fontSize={{ xs: "12px", md: "16px" }}
            lineHeight={{ xs: "16px", md: "20px" }}
            gutterBottom
          >
            {productName}
          </Typography>
          <Typography
            variant="body1"
            noWrap
            color={theme.palette.typeLowEmphasis.main}
            fontWeight={{ xs: "500", md: "400" }}
            fontSize={{ xs: "12px", md: "14px" }}
            lineHeight={{ xs: "16px", md: "20px" }}
            gutterBottom
          >
            {productType}
          </Typography>
          {ratingStars && <Stack mb={1} direction='row' alignItems='center' flexWrap='nowrap' spacing={1}><Rating size="small" name="read-only" value={pRating} readOnly /><Typography variant="body1" fontSize={{xs:'8.5px', md:'14px'}} fontWeight='500' color={theme.palette.primary.main}>43 Ratings</Typography></Stack> }
          {location === 'category-page' && prices || 
          <Typography
            variant="body1"
            noWrap
            color={fontColor}
            fontWeight={{ xs: "600", md: "500" }}
            fontSize={{ xs: "14px", md: "16px" }}
            lineHeight={{ xs: "16px", md: "20px" }}
            gutterBottom
          >
            {price}
          </Typography>}
        </Box>
        <Box>
          <IconBtn
            iconsNames={icons}
            pseudoIconId={cardItemPseudoIconId}
            iconSize={{ xs: "18px", md: "25px" }}
            iconColor={theme.palette.dark.main}
            iconPadding={0}
            pseudoType={"&:hover"}
            pseudoBackgroundColor={"transparent"}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default CardItem;
