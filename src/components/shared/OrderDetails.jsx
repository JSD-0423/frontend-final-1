import React from "react";
import { Box, Typography } from "@mui/material";

const OrderDetails = ({
  textValueArray,
  totalText,
  totalValue,
  totalFontWeight,
}) => {
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
      {textValueArray.map(({ text, value, index }) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          key={index}
        >
          <Typography>{text}:</Typography>
          <Typography>${value}</Typography>
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Typography sx={{ fontWeight: totalFontWeight }}>
          {totalText}:
        </Typography>
        <Typography sx={{ fontWeight: totalFontWeight }}>
          ${totalValue}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderDetails;
