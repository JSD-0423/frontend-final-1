import React from "react";
import CardsWrapper from "../cardsWrapper/CardsWrapper";
import { Box, Stack, Typography } from "@mui/material";
import CollectionCard from "../collectionCard/CollectionCard";

const TopCategories = () => {
  const topCategoriesObj = [
    {
      collectionName: "Skincare",
      image: "https://images2.imgbox.com/6b/fc/8s8qcqoW_o.png",
    },
    {
      collectionName: "Jewellery",
      image: "https://images2.imgbox.com/1c/22/FGWA3OZv_o.png",
    },
    {
      collectionName: "Handbags",
      image: "https://images2.imgbox.com/6b/3c/zM5FfDQP_o.png",
    },
    {
      collectionName: "Watches",
      image: "https://images2.imgbox.com/66/1f/QJgTOEVx_o.png",
    },
  ];
  return (
    <CardsWrapper
      wrapperHeight={"106px"}
      displayType={{ xs: "block", md: "none" }}
    >
      <Box component="div" mb={2}>
        <Typography
          variant="h2"
          fontWeight="600"
          fontSize="14px"
          lineHeight="16px"
        >
          Top Categories
        </Typography>
      </Box>
      <Stack direction="row" justifyContent="space-between" spacing={3}>
        {topCategoriesObj.map((collection) => {
          return (
            <CollectionCard
              key={collection.collectionName}
              cardWidth={"60px"}
              imageWidth={"100%"}
              imageHeight={"60px"}
              imageBorderRadius={"8px"}
              imageObjectFit={"cover"}
              centerText={"center"}
              collectionName={collection.collectionName}
              image={collection.image}
            ></CollectionCard>
          );
        })}
      </Stack>
    </CardsWrapper>
  );
};

export default TopCategories;
