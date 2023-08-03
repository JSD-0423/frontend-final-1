import React from "react";
import { Stack, useTheme } from "@mui/material";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { CardItem, CardsWrapperHeader, CardsWrapper, ScrollToTopLink } from "../shared/index";
import Products from "../../Skeletons/Products";

const NewArrivals = ({newArrivalsData}) => {
  const theme = useTheme();
  const {data,loading} = newArrivalsData;
  return (
    <CardsWrapper>
      <CardsWrapperHeader
        wrapperTitle={"New Arrivals"}
        fontColor={theme.palette.dark.main}
        WrapperGoToIcon={NavigateNextOutlinedIcon}
        WrapperPseudoIconId={NavigateNextOutlinedIcon}
        showBtnOnAllSizes={true}
      />
      <Stack
        direction="row"
        justifyContent="flex-start"
        flexWrap="nowrap"
        spacing={{ xs: 2, md: 3 }}
        overflow="auto"
      >
        {loading ? 
          (<Products numberOfItems={6} width={286} height={286} />)
          : 
          (data.products && data.products.map((card) => {
            return (
              <ScrollToTopLink
                key={card.id}
                style={{ textDecoration: "none" }}
                to={`/product-details/${card.id}`}
              >
                <CardItem
                  key={card.id}
                  cardWidth={{ xs: "136px", md: "286px" }}
                  imageHeight={{ xs: "138px", md: "286px" }}
                  imageWidth={"100%"}
                  imageBorderRadius={"10px"}
                  imageObjectFit={"cover"}
                  productName={card.title}
                  productType={card.description}
                  price={`$${card.price}`}
                  icons={FavoriteBorderOutlinedIcon}
                  cardItemPseudoIconId={FavoriteBorderOutlinedIcon}
                  image={card.image}
                  fontColor={theme.palette.typeHighEmphasis.main}
                />
              </ScrollToTopLink>
            );
          }))
        }
      </Stack>
    </CardsWrapper>
  );
};

export default NewArrivals;
