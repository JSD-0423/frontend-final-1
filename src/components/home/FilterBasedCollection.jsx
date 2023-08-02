import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import { FilterBasedCard } from "./index.js";
import { CardsWrapper } from "../shared/index";

const FilterBasedCollection = () => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate(`/category`);
  };

  const filterCardsCollection = [
    {
      cardId: 1,
      cardInfo: "Limited Edition Products",
      imageUrl: {
        desktop: "https://images2.imgbox.com/4c/50/SdVeqLHx_o.png",
        mobile: "https://images2.imgbox.com/17/94/7sNiYkmp_o.png",
      },
    },
    {
      cardId: 2,
      cardInfo: "15% Off and More!",
      imageUrl: {
        desktop: "https://images2.imgbox.com/5b/98/kKo9O6NK_o.png",
        mobile: "https://images2.imgbox.com/79/63/7fEtwpCB_o.png",
      },
    },
    {
      cardId: 3,
      cardInfo: "Popular in the community!",
      imageUrl: {
        desktop: "https://images2.imgbox.com/ff/32/VFERQnl5_o.png",
        mobile: "https://images2.imgbox.com/56/e5/h3dhTM3v_o.png",
      },
    },
  ];
  return (
    <CardsWrapper>
      <Box
        display="grid"
        gap={{ xs: "16px 16px", md: "40px 32px" }}
        gridTemplateColumns="repeat(2 , 1fr)"
        sx={{ gridTemplateAreas: `'card-1 card-1''card-2 card-3'` }}
      >
        {filterCardsCollection.map((card) => {
          return (
            <Box
              key={card.cardId}
              onClick={handleBoxClick}
              height={{
                xs: (card.cardId === 1 && "132px") || "100px",
                md: (card.cardId === 1 && "400px") || "228px",
              }}
              gridArea={
                (card.cardId === 1 && "card-1") ||
                (card.cardId === 2 && "card-2") ||
                (card.cardId === 3 && "card-3")
              }
              borderRadius="10px"
              sx={{
                backgroundImage: {
                  xs: `url(${card.imageUrl.mobile})`,
                  sm: `url(${card.imageUrl.desktop})`,
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                cursor:'pointer'
              }}
            >
              <FilterBasedCard
                cardInfo={card.cardInfo}
                iconName={EastIcon}
              />
            </Box>
          );
        })}
      </Box>
    </CardsWrapper>
  );
};

export default FilterBasedCollection;
