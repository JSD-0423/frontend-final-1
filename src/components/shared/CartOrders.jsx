import React from "react";
import { Box, Typography } from "@mui/material";

const CartOrders = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        marginTop: "24px",
        marginBottom: "9px",
      }}
    >
      <img
        src="https://images2.imgbox.com/de/04/cUdIOyc4_o.png"
        alt="product image"
        style={{ width: "75px", height: "80px", borderRadius: "8px" }}
      />
      <Box
        sx={{
          gap: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: "500", lineHeight: "20px" }}
        >
          Coach
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "20px",
            color: "typeLowEmphasis.main",
          }}
        >
          Leather Coach Bag
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "20px",
            color: "typeLowEmphasis.main",
          }}
        >
          Qty- 1
        </Typography>
      </Box>
    </Box>
  );
};

export default CartOrders;
