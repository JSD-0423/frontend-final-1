import React from "react";
import { Stack, useTheme } from "@mui/material";

import {
  CardsWrapper,
  CardsWrapperHeader,
  ScrollToTopLink,
} from "../shared/index.js";
import { TitledImageCard } from "../home/index";
import { TitledCardSkeleton } from "../../Skeletons/index.jsx";

const HandPickedCollections = ({ handPickedCollections }) => {
  const theme = useTheme();
  const { data, loading } = handPickedCollections;
  const collections = data?.slice(0, 4);

  return (
    <CardsWrapper wrapperBg={theme.palette.primary.main}>
      <CardsWrapperHeader
        wrapperTitle="Handpicked Collections"
        fontColor={theme.palette.bright.main}
        style={{ paddingTop: "32px" }}
      />
      {!loading ? (
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={["26px", "40px", "60px", "40px"]}
          marginTop="24px"
          paddingBottom="42px"
        >
          {collections?.map(({ id, category, icon }) => (
            <ScrollToTopLink
              key={id}
              style={{ textDecoration: "none" }}
              to={`/category/${id}`}
            >
              <TitledImageCard image={icon} title={category} />
            </ScrollToTopLink>
          ))}
        </Stack>
      ) : (
        <TitledCardSkeleton />
      )}
    </CardsWrapper>
  );
};

export default HandPickedCollections;
