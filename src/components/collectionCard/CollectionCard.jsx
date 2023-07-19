import { Box, Typography } from "@mui/material";
import React from "react";

const CollectionCard = ({
  cardWidth,
  imageWidth,
  imageHeight,
  imageObjectFit,
  imageBorderRadius,
  image,
  collectionName,
}) => {
  return (
    <Box component="div" width={cardWidth} flexShrink={0} marginLeft="0px">
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
          alt="collection-thumbnail"
        />
      </Box>
      <Box component="div">
        <Typography
          textAlign="center"
          fontSize="12px"
          fontWeight="500"
          lineHeight="18px"
        >
          {collectionName}
        </Typography>
      </Box>
    </Box>
  );
};

export default CollectionCard;
