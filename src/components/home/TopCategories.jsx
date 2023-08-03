import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

import { CardsWrapper, ScrollToTopLink } from "../shared/index";
import { CollectionCard } from "./index";

const TopCategories = ({categories}) => {
  const theme = useTheme();
  const topCategoriesObj = [
    {
      collectionName: "Electronics",
      image: "https://images2.imgbox.com/6b/fc/8s8qcqoW_o.png",
    },
    {
      collectionName: "Fashion",
      image: "https://images2.imgbox.com/1c/22/FGWA3OZv_o.png",
    },
    {
      collectionName: "Food",
      image: "https://images2.imgbox.com/6b/3c/zM5FfDQP_o.png",
    },
    {
      collectionName: "Entertainment",
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
            <ScrollToTopLink
              key={collection.collectionName}
              to={`/category/${collection.collectionName}`}
            >
              <CollectionCard
                cardWidth={"60px"}
                imageWidth={"100%"}
                imageHeight={"60px"}
                imageBorderRadius={"8px"}
                imageObjectFit={"cover"}
                collectionName={collection.collectionName}
                image={collection.image}
              ></CollectionCard>
            </ScrollToTopLink>
          );
        })}
      </Stack>
    </CardsWrapper>
  );
};

export default TopCategories;
