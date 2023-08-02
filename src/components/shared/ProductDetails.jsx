import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { QuantityCounter, IconBtn } from "./index.js";

const ProductDetails = ({ image, productName, productDescription, price }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          paddingBottom: "28px",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        <img
          src="https://images2.imgbox.com/de/04/cUdIOyc4_o.png"
          alt="product image"
          style={{ width: "75px", height: "80px", borderRadius: "8px" }}
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
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
            <QuantityCounter />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <IconBtn
              Icon={CloseIcon}
              btnStyle={{
                padding: "0px",
                color: "typeLowEmphasis.main",
              }}
              elementStyle={{ justifyContent: "flex-end" }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "typeHighEmphasis.main",
              }}
            >
              $54.69
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider light />
    </>
  );
};

export default ProductDetails;
