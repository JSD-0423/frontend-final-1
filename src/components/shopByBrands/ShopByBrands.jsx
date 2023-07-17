import React from "react";

import { CardsWrapper, CardsWrapperHeader, ImageCard } from "../index.js";
import Zara from "../../assets/zaraBrand.png";
import Dolce from "../../assets/DolceBrand.png";
import HMBrand from "../../assets/HMBrand.png";
import Chanel from "../../assets/ChanelBrand.png";
import Prada from "../../assets/PradaBrand.png";
import Biba from "../../assets/BibaBrand.png";
import { useTheme } from "@mui/system";
import { Box, useMediaQuery } from "@mui/material";

const ShopByBrands = () => {
  const theme = useTheme();

  const cardImages = [
    { id: "zara", image: Zara },
    { id: "Dolce", image: Dolce },
    { id: "HMBrand", image: HMBrand },
    { id: "Chanel", image: Chanel },
    { id: "Prada", image: Prada },
    { id: "Biba", image: Biba },
  ];
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <CardsWrapper>
      <CardsWrapperHeader
        wrapperTitle="Shop by Brands"
        fontColor={theme.palette.dark.main}
        WrapperGoToIcon={["NavigateNextOutlinedIcon"]}
        WrapperPseudoIconId={"NavigateNextOutlinedIcon"}
        showBtnOnAllSizes={isSmallScreen}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: ["16px", "30px", "50px"],
        }}
      >
        {cardImages?.map(({ id, image }) => (
          <ImageCard key={id} image={image} />
        ))}
      </Box>
    </CardsWrapper>
  );
};

export default ShopByBrands;
