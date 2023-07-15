import { Box } from "@mui/material";
import React from "react";

const ImageCard = ({ image }) => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        backgroundColor: "accent.main",
        width: ["100px", "133px", "168px"],
        height: ["100px", "133px", "168px"],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        WebkitFlexBasis: ["30%", "29.3%", "13.3%"],
      }}
    >
      <Box
        component="img"
        src={image}
        alt={image}
        sx={{
          width: ["60px", "70px", "90px", "109px"],
          height: ["25px", "35px", "46px"],
        }}
      />
    </Box>
  );
};

export default ImageCard;
