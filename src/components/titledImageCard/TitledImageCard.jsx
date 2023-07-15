import React from "react";
import { Box, Typography } from "@mui/material";

const TitledImageCard = ({ image, title }) => {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: ["160px", "280px"],
        height: ["152px", "280px"],
        borderRadius: "16px",
        display: "flex",
        overflow: "hidden",
        WebkitFlexBasis: ["43%", "44%", "45%", "22%", "22%"],
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
            color: "typeHightEmphasis.main",
          }}
        >
          {title}
        </Typography>
      </div>
    </Box>
  );
};

export default TitledImageCard;
