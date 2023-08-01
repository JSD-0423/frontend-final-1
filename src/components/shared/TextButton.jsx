import React from "react";
import { Button, Typography } from "@mui/material";

const TextButton = ({ handleClick, text, icon, style }) => {
  return (
    <Button
      sx={{
        backgroundColor: "primary.main",
        color: "bright.main",
        textTransform: "none",
        borderRadius: "8px",
        padding: "10px 40px",
        display: ["none", "flex", "flex"],
        gap: "8px",
        ":hover": {
          bgcolor: "primaryTint.main",
        },
        ...style,
      }}
      onClick={handleClick}
    >
      {icon && icon}
      <Typography
        variant="h5"
        sx={{ fontWeight: "500", lineHeight: "20px", fontSize: "16px" }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default TextButton;
