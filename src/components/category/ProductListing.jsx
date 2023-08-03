import React, { useContext, useState } from "react";
import { Box, Pagination, Stack, Typography, useTheme } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { CardItem, AvailablePrices, ScrollToTopLink } from "../shared/index";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { SearchInputValueContext } from "../../context/SearchInputValue";
import { searchProduct } from "../../API/API";
import { Products } from "../../Skeletons";
import { HandPickedIsClickedContext } from "../../context/HandPickedIsClickedContext";

const ProductListing = ({categoryData, category, allNewArrivalsData}) => {
  const {inputValue} = useContext(SearchInputValueContext);
  const {handPickedisClicked, setHandPickedisClicked} = useContext(HandPickedIsClickedContext);
  const {data: searchData} = useAxiosFetch(searchProduct,inputValue);
  let data;
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [itemsPerPage, SetItemsPerPage] = useState(20);

  if (category === 'viewall') {
    data = allNewArrivalsData;
  } else if (handPickedisClicked === true) {
    data = categoryData;
  } else {
    data = searchData;
  }

  if (!data) {
    return (
      <Box display="grid" gap={{ xs: "25px 22px", md: "87px 31px" }} gridTemplateColumns={{ xs: "repeat(2 , 1fr)", md: "repeat(4 , 1fr)" }}>
        <Products height={['156px',"286px"]} width={['156px',"286px"]} numberOfItems={itemsPerPage} />;  
      </Box>
    )
  }

  if (data.products.length === 0) {
    return(
            <Stack direction='row' justifyContent='center' alignItems='center' width='100%' height='90vh'>
              <Typography variant="h1">
                No items were found
              </Typography>  
            </Stack>
          ) 
  }
  const newData = data.products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

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
              linkStyles={{
                width: '100%',
              }}
              to={`/product-details/${card.id}/${category}`}
            >
              <CardItem
                cardWidth={['156px',"286px"]}
                imageHeight={['156px',"286px"]}
                imageWidth={"100%"}
                imageBorderRadius={"10px"}
                imageObjectFit={"cover"}
                productName={card.title}
                productType={card.description}
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
                pRating={card.rating}
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
          count={Math.ceil(data.products.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default ProductListing;