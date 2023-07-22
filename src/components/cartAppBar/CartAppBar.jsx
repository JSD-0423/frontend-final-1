import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { IconBtn } from "../index.js";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CartAppBar = ({ hidePopup }) => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "24px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          paddingTop: "15px",
          paddingLeft: "16px",
        }}
      >
        <IconBtn
          Icon={ArrowBackIcon}
          btnStyle={{ color: `${theme.palette.primary.main}` }}
          handleClick={hidePopup}
        />
        <Typography
          variant="h6"
          fontSize={"20px"}
          fontWeight={"600"}
          color="primary.main"
          component="div"
        >
          Back
        </Typography>
      </Box>
    </Box>
  );
};

export default CartAppBar;
