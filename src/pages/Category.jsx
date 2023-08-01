import React from "react";

import { Box, Typography, useTheme } from "@mui/material";
import { CustomContainer } from "../components/shared/index";
import { ProductListing } from "../components/category/index";

const Category = () => {
  const theme = useTheme();
  return (
    <CustomContainer>
      <Box mb={{ xs: 2, md: 5 }} width="100%" height="100%">
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://images2.imgbox.com/6f/5f/OBqCB0Ul_o.png"
          alt="black friday discount"
        />
      </Box>
      <Typography
        mb={{ xs: 2, md: 5 }}
        variant="h1"
        fontSize={["20px", "34px"]}
        fontWeight="600"
        color={theme.palette.primary.main}
      >
        Handbags
      </Typography>
      <ProductListing />
    </CustomContainer>
  );
};

export default Category;
