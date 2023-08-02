import React from "react";
import { Stack, useTheme } from "@mui/material";

import { CardsWrapper, CardsWrapperHeader, ScrollToTopLink } from "../shared/index.js";
import { TitledImageCard } from "../home/index";
import collection1 from "../../assets/perfumeCollections1.png";
import collection2 from "../../assets/bagsCollection2.png";
import collection3 from "../../assets/watchCoolection3.png";
import collection4 from "../../assets/glassesCollection4.png";

const HandPickedCollections = () => {
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
    <CardsWrapper wrapperBg={theme.palette.primary.main}>
      <CardsWrapperHeader
        wrapperTitle="Handpicked Collections"
        fontColor={theme.palette.bright.main}
        style={{ paddingTop: "32px" }}
      />
      <Stack
        direction="row"
        flexWrap="wrap"
        gap={["26px", "40px", "60px", "40px"]}
        marginTop="24px"
        paddingBottom="42px"
      >
        {CardItemsObj.map((ele) => (
          <ScrollToTopLink key={ele.id} style={{ textDecoration: "none" }} to="/category">
            <TitledImageCard image={ele.image} title={ele.productName} />
          </ScrollToTopLink>
        ))}
      </Stack>
    </CardsWrapper>
  );
};

export default HandPickedCollections;
