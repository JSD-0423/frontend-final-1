import { Stack, useTheme } from "@mui/material";
import React from "react";

import {
  CardsWrapper,
  HeroSection,
  NewArrivals,
  TitledImageCard,
  CardsWrapperHeader,
  FilterBasedCollecttion,
  TopCategories
} from "../components";

import collection1 from "../assets/perfumeCollections1.png";
import collection2 from "../assets/bagsCollection2.png";
import collection3 from "../assets/watchCoolection3.png";
import collection4 from "../assets/glassesCollection4.png";
const Home = () => {
  const theme = useTheme();

  let CardItemsObj = [
    {
      id: "Personal Care",
      productName: "Personal Care",
      image: collection1,
    },
    {
      id: "Handbags",
      productName: "Handbags",
      image: collection2,
    },
    {
      id: "Wrist Watches",
      productName: "Wrist Watches",
      image: collection3,
    },
    {
      id: "Sun Glasses",
      productName: "Sun Glasses",
      image: collection4,
    },
  ];
  return (
    <>
      <HeroSection />
      <TopCategories />
      <NewArrivals />
      <CardsWrapper wrapperBg="primary.main">
        <CardsWrapperHeader
          wrapperTitle="Handpicked Collections"
          fontColor={theme.palette.bright.main}
          style={{ paddingTop: "32px" }}
        />
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={["16px","47px"]}
          marginTop="24px"
          paddingBottom="42px"
        >
          {CardItemsObj.map((ele) => (
            <TitledImageCard
              image={ele.image}
              title={ele.productName}
              key={ele.id}
            />
          ))}
        </Stack>
      </CardsWrapper>
      <FilterBasedCollecttion />
    </>
  );
};

export default Home;
