import React from "react";
import { Box } from "@mui/material";
import { CustomContainer } from "./index";

const CardsWrapper = ({ children, wrapperHeight, wrapperBg, displayType }) => {
  return (
    <Box
      component="div"
      sx={{
        height: wrapperHeight,
        width: "100%",
        backgroundColor: wrapperBg,
        display: displayType,
      }}
      mb={5}
    >
      <CustomContainer>{children}</CustomContainer>
    </Box>
  );
};

export default CardsWrapper;
