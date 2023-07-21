import React from "react";
import { Box, Typography } from "@mui/material";

const OrderDetails = ({ totalPrice }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "24px",
        gap: "12px",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Subtotal:</Typography>
        <Typography>$109.38</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Tax:</Typography>
        <Typography>$2.00</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "600" }}>Total:</Typography>
        <Typography sx={{ fontWeight: "600" }}>$111.38</Typography>
      </Box>
    </Box>
  );
};

export default OrderDetails;
