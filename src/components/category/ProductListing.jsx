import React, { useState } from "react";
import { Box, Pagination, Stack, useTheme } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { CardItem, AvailablePrices, ScrollToTopLink } from "../shared/index";
import CardIemsObj from "./productLists";

const ProductListing = ({ productList }) => {
  const data = productList ? productList : CardIemsObj;
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [itemsPerPage, SetItemsPerPage] = useState(9);

  const newData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  const PricesStylesObj = {
    pPrice: {
      fontSize: { xs: "14px", md: "16px" },
      fontWeight: { xs: "600", md: "500" },
      lineHeight: "normal",
      color: theme.palette.dark.main,
    },
    pOldPrice: {
      fontSize: { xs: "10px", md: "14px" },
      fontWeight: { xs: "500", md: "400" },
      lineHeight: "normal",
      textDecoration: "line-through",
      color: theme.palette.lightText.main,
    },
    pSpecialOffer: {
      fontSize: { xs: "10px", md: "16px" },
      fontWeight: { xs: "500", md: "400" },
      lineHeight: "normal",
      color: "#FF404B",
    },
  };
  return (
    <>
      <Box
        display="grid"
        gap={{ xs: "25px 22px", md: "87px 31px" }}
        gridTemplateColumns={{ xs: "repeat(2 , 1fr)", md: "repeat(4 , 1fr)" }}
      >
        {newData.map((card) => {
          return (
            <ScrollToTopLink
              key={card.id}
              style={{
                textDecoration: "none",
                display: "inline-block",
                width: { xs: "100%", md: "100%", lg: "286px" },
                height: "fit-content",
              }}
              to="/product-details"
            >
              <CardItem
                cardWidth={"100%"}
                imageHeight={"100%"}
                imageWidth={"100%"}
                imageBorderRadius={"10px"}
                imageObjectFit={"cover"}
                productName={card.productName}
                productType={card.productType}
                prices={
                  <AvailablePrices
                    pPrice={card.price}
                    pOldPrice={"$78.66"}
                    pSpecialOffer={"50%OFF"}
                    fontStyles={PricesStylesObj}
                    location={"category-page"}
                  />
                }
                icons={FavoriteBorderOutlinedIcon}
                cardItemPseudoIconId={FavoriteBorderOutlinedIcon}
                image={card.image}
                fontColor={theme.palette.typeHighEmphasis.main}
                ratingStars={true}
                pRating={4}
                location={"category-page"}
              />
            </ScrollToTopLink>
          );
        })}
      </Box>
      <Stack
        direction="row"
        mt={2}
        width="100%"
        justifyContent="center"
        spacing={2}
      >
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default ProductListing;
