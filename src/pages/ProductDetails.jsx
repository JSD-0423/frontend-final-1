import React from "react";
import { Box, Stack } from "@mui/material";
import { ProductTabs } from "../components/productDetails/index";

import { CustomContainer, Carousel } from "../components/shared/index";
import {
  ThumbCarousel,
  ProductDescription,
} from "../components/productDetails/index";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../API/API";
import { ProductDetailsCarousel, CarouselSkeleton } from "../Skeletons";

const ProductDetails = () => {
  const { id } = useParams();
  const {data, loading} = useAxiosFetch(getSingleProduct, id);
  let title, image, description, price, rating;
  if (data) {
    ({ title, image, description, price, rating } = data);
    console.log(title,image,description,price,rating)
    // console.log("product Details data:", data)
  }
  const images = [
    {
      id: "1",
      image: image || "https://images2.imgbox.com/9c/ad/1Jw98VTE_o.png",
      imgPath: image || "https://images2.imgbox.com/de/04/cUdIOyc4_o.png",
      element: "",
    },
    {
      id: "2",
      image: image || "https://images2.imgbox.com/9c/ad/1Jw98VTE_o.png",
      imgPath: image || "https://images2.imgbox.com/de/04/cUdIOyc4_o.png",
      element: "",
    },
    {
      id: "3",
      image: image || "https://images2.imgbox.com/9c/ad/1Jw98VTE_o.png",
      imgPath: image || "https://images2.imgbox.com/de/04/cUdIOyc4_o.png",
      element: "",
    },
    {
      id: "4",
      image: image || "https://images2.imgbox.com/9c/ad/1Jw98VTE_o.png",
      imgPath: image || "https://images2.imgbox.com/de/04/cUdIOyc4_o.png",
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
          <Box width="605px" height='704px' display={{ xs: "none", md: "block" }}>
            { loading ? (<ProductDetailsCarousel />) : (<ThumbCarousel productImages={images} />)}
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            { loading ? (<CarouselSkeleton height={172} />) : (<Carousel location={"product-details"} images={images} />)}
          </Box>
          <ProductDescription
            productId = {id}
            pName={title}
            pDesc={description}
            pPrice={`$${price}`}
            pOldPrice={"$78.66"}
            pSpecialOffer={"50%OFF"}
            pRating={4}
            loading={loading}
          />
        </Stack>
      </CustomContainer>
      <ProductTabs />
    </>
  );
};

export default ProductDetails;
