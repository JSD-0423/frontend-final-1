import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useImageExists from "../../hooks/useImageExists";
const CollectionCard = ({
  cardWidth,
  imageWidth,
  imageHeight,
  imageObjectFit,
  imageBorderRadius,
  imageURL,
  collectionName,
}) => {
  const { imageExists, loading, FallBackImage } = useImageExists(imageURL);

  return (
    <Box component="div" width={cardWidth} flexShrink={0} marginLeft="0px">
      <Box component="div" width={imageWidth} height={imageHeight} mb={1}>
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
            src={imageExists ? imageURL : FallBackImage}
            alt="collection-thumbnail"
          />
        )}
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
