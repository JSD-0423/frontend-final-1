import React from "react";
import { Box, Stack } from "@mui/material";
import { ProductTabs } from "../components/productDetails/index";

import { CustomContainer, Carousel } from "../components/shared/index";
import {
  ThumbCarousel,
  ProductDescription,
} from "../components/productDetails/index";

const ProductDetails = () => {
  const images = [
    {
      id: "1",
      image: "https://images2.imgbox.com/9c/ad/1Jw98VTE_o.png",
      imgPath: "https://images2.imgbox.com/de/04/cUdIOyc4_o.png",
      element: "",
    },
    {
      id: "2",
      image: "https://images2.imgbox.com/9c/ad/1Jw98VTE_o.png",
      imgPath: "https://images2.imgbox.com/de/04/cUdIOyc4_o.png",
      element: "",
    },
    {
      id: "3",
      image: "https://images2.imgbox.com/9c/ad/1Jw98VTE_o.png",
      imgPath: "https://images2.imgbox.com/de/04/cUdIOyc4_o.png",
      element: "",
    },
    {
      id: "4",
      image: "https://images2.imgbox.com/9c/ad/1Jw98VTE_o.png",
      imgPath: "https://images2.imgbox.com/de/04/cUdIOyc4_o.png",
      element: "",
    },
  ];
  return (
    <>
      <CustomContainer>
        <Stack
          mb={{ xs: 2, md: 5 }}
          direction={{ xs: "column", md: "row" }}
          flexWrap="nowrap"
          spacing={3}
        >
          <Box width="605px" display={{ xs: "none", md: "block" }}>
            <ThumbCarousel productImages={images} />
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <Carousel location={"product-details"} images={images} />
          </Box>
          <ProductDescription
            pName={"Coach"}
            pDesc={"Leather Coach Bag with adjustable starps."}
            pPrice={"$54.69"}
            pOldPrice={"$78.66"}
            pSpecialOffer={"50%OFF"}
            pRating={4}
          />
        </Stack>
      </CustomContainer>
      <ProductTabs />
    </>
  );
};

export default ProductDetails;
