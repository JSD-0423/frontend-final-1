import React from "react";
import { Box, Typography } from "@mui/material";

const TitledImageCard = ({ image, title }) => {
  return (
    <Box
      component="div"
      sx={{
        background: `url(${image})  lightgray 50% / cover no-repeat`,
        width: ["170px", "280px"],
        height: ["152px", "282px"],
        borderRadius: "16px",
        display: "flex",
        overflow: "hidden",
        WebkitFlexBasis: ["45%", "45.5%", "46.8%", "22.5%", "22%"],
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(196, 196, 196, 0), rgba(3, 24, 26, 0.46))",
          alignSelf: "end",
          width: "100%",
        }}
      >
        <Typography
          invariant="h2"
          sx={{
            alignSelf: "end",
            marginLeft: "16px",
            marginBottom: "16px",
            fontSize: ["14px", "24px"],
            fontWeight: ["500", "600"],
            color: "typeHighEmphasis.main",
          }}
        >
          {title}
        </Typography>
      </div>
    </Box>
  );
};

export default TitledImageCard;
