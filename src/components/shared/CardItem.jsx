import React from "react";
import { Box, Rating, Stack, Typography, useTheme } from "@mui/material";
import { IconBtn } from "./index";
import useImageExists from "../../hooks/useImageExists";

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
  const { imageExists, loading, FallBackImage } = useImageExists(image);

  return (
    <Box width={cardWidth} flexShrink={0}>
      <Box width={imageWidth} height={imageHeight} mb={1}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: imageObjectFit,
              verticalAlign: "middle",
              borderRadius: imageBorderRadius,
            }}
            src={imageExists ? image : FallBackImage}
            alt={productName}
          />
        )}
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
            whiteSpace="nowrap"
            noWrap
            color={theme.palette.typeLowEmphasis.main}
            fontWeight={{ xs: "500", md: "400" }}
            fontSize={{ xs: "12px", md: "14px" }}
            lineHeight={{ xs: "16px", md: "20px" }}
            gutterBottom
          >
            {productType}
          </Typography>
          {ratingStars && (
            <Stack
              mb={1}
              direction="row"
              alignItems="center"
              flexWrap="nowrap"
              spacing={1}
            >
              <Rating size="small" name="read-only" value={pRating} readOnly />
              <Typography
                variant="body1"
                fontSize={{ xs: "8.5px", md: "14px" }}
                fontWeight="500"
                color={theme.palette.primary.main}
              >
                43 Ratings
              </Typography>
            </Stack>
          )}
          {(location === "category-page" && prices) || (
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
            </Typography>
          )}
        </Box>
        <Box>
          <IconBtn
            Icon={icons}
            pseudoIconId={cardItemPseudoIconId}
            btnStyle={{
              color: `${theme.palette.dark.main}`,
              padding: "0",
            }}
            iconStyle={{ fontSize: ["18px", "25px"] }}
            pseudoType={"&:hover"}
            pseudoStyle={{ backgroundColor: "transparent" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default CardItem;
