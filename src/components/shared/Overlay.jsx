import { Box } from "@mui/material";
import React from "react";

const Overlay = ({ visible }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 10000,
        display: visible ? "block" : "none",
      }}
    ></Box>
  );
};

export default Overlay;
