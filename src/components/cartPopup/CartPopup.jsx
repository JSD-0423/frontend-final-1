import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import {
  TextButton,
  OrderDetails,
  Overlay,
  ProductDetails,
  ScrollToTopLink,
} from "../shared/index";
import { CartAppBar } from "./index";

const CartPopup = ({ isPopupVisible, hidePopup }) => {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
    hidePopup();
  };
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
        <OrderDetails
          textValueArray={[
            { text: "Subtotal", value: "109.38" },
            { text: "Tax", value: "2.00" },
          ]}
          totalText={"Total"}
          totalValue={111.38}
          totalFontWeight={"500"}
        />
        <TextButton
          text="Place Order"
          style={{ width: "100%", marginTop: "24px", display: "flex" }}
          handleClick={navigateToCart}
        />
        <ScrollToTopLink sx={{ textDecoration: "none" }} onClick={hidePopup}>
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
        </ScrollToTopLink>
      </Box>
    </>
  );
};

export default CartPopup;
