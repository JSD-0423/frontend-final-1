import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

import { CardsWrapper, ScrollToTopLink } from "../shared/index";
import { CollectionCard } from "./index";

const TopCategories = ({ categories }) => {
  const theme = useTheme();

  return (
    <CardsWrapper
      wrapperHeight={"100%"}
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
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={3}
        sx={{ overflow: "auto" }}
      >
        {categories?.data?.map(({ category, icon, id }) => {
          return (
            <ScrollToTopLink
              key={id}
              to={`/category/${category}`}
              linkStyles={{
                textDecoration: "none",
                color: theme.palette.dark.main,
                "&:visited": {
                  color: theme.palette.dark.main,
                },
              }}
            >
              <CollectionCard
                cardWidth={"60px"}
                imageWidth={"100%"}
                imageHeight={"60px"}
                imageBorderRadius={"8px"}
                imageObjectFit={"cover"}
                centerText={"center"}
                collectionName={category}
                imageURL={icon ? icon : ""}
              ></CollectionCard>
            </ScrollToTopLink>
          );
        })}
      </Stack>
    </CardsWrapper>
  );
};

export default TopCategories;
