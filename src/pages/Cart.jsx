import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CustomContainer,
  OrderDetails,
  OrdersTable,
  ProductDetails,
  TextButton,
} from "../components/shared/index";

const Cart = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <CustomContainer>
      <Typography
        sx={{
          fontSize: " 34px",
          fontWeight: 600,
          color: "primary.main",
          marginBottom: "36px",
        }}
      >
        My Cart
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: ["column", "column", "row"],
        }}
      >
        {isSmall ? <ProductDetails /> : <OrdersTable />}
        <Box sx={{ width: ["100%", "50%", "28%"], marginTop: "10px" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              color: "dark.main",
              paddingBottom: "5px",
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
              marginBottom: "30px",
            }}
          >
            Order Summary
          </Typography>
          <OrderDetails
            textValueArray={[
              { text: "Sub Total", value: "119.69" },
              { text: "Discount", value: "13.40" },
              { text: "Delievery Fee", value: "0.00" },
            ]}
            totalText={"Grand Total"}
            totalValue={106.92}
            totalFontWeight={600}
          />
          <Box sx={{ display: "flex", gap: "32px", marginTop: "35px" }}>
            <TextButton
              text="Place Order"
              style={{
                padding: "0px 28px",
                width: "180px",
                boxSizing: "border-box",
              }}
              handleClick={navigateToCheckout}
            />
            <TextButton
              text="Continue Shopping"
              style={{
                backgroundColor: "transparent",
                color: ` ${theme.palette.primary.main}`,
                border: `2px solid ${theme.palette.primary.main}`,
                padding: "10px 4px",
                width: "180px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default Cart;
