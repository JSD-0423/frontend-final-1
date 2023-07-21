import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { IconBtn } from "../index.js";

const CardItem = ({
  cardWidth,
  imageHeight,
  imageWidth,
  imageBorderRadius,
  imageObjectFit,
  productName,
  productType,
  price,
  icons,
  cardItemPseudoIconId,
  image,
  fontColor,
}) => {
  const theme = useTheme();

  return (
    <Box component="div" width={cardWidth} flexShrink={0}>
      <Box component="div" width={imageWidth} height={imageHeight} mb={1}>
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
