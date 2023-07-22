import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import {
  TextButton,
  CartAppBar,
  OrderDetails,
  Overlay,
  ProductDetails,
} from "../index.js";

const CartPopup = ({ isPopupVisible, hidePopup }) => {
  return (
    <>
      <Overlay visible={isPopupVisible} />
      <Box
        sx={{
          width: ["350px", "394px"],
          height: "auto",
          bgcolor: "bright.main",
          pt: "12px",
          pl: "11px",
          pr: "4px",
          top: "80px",
          right: "10px",
          position: "absolute",
          zIndex: "100009",
          display: isPopupVisible ? "block" : "none",
        }}
      >
        <CartAppBar hidePopup={hidePopup} />
        <ProductDetails />
        <ProductDetails />
        <OrderDetails />
        <TextButton
          text="Place Order"
          style={{ width: "100%", marginTop: "24px", display: "flex" }}
        />
        <Link sx={{ textDecoration: "none" }} onClick={hidePopup}>
          <Typography
            sx={{
              marginTop: "34px",
              paddingBottom: "24px",
              fontSize: "14px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "underline",
              color: "primary.main",
            }}
          >
            Continue Shopping
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default CartPopup;
