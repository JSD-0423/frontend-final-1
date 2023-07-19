import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import { SearchInput, IconBtn } from "../index.js";
import { useTheme } from "@emotion/react";

const Navbar = () => {
  const theme = useTheme();

  const collections = [
    "Handbags",
    "Watches",
    "Skincare",
    "Jewellery",
    "Apparels",
  ];

  return (
    <Stack
      direction="row"
      spacing={{ xs: 0, sm: 0, md: 1, lg: 2 }}
      width="100%"
      alignItems="center"
    >
      <Box
        width={{ md: "85%", lg: "100%" }}
        height="100%"
        component="div"
        display={{ xs: "none", md: "block" }}
      >
        <Stack
          direction="row"
          spacing={{ md: 1, lg: 2 }}
          width="100%"
          color="black"
        >
          {collections.map((collection) => {
            return (
              <Typography key={collection} lineHeight="18px" fontSize="14px">
                {collection}
              </Typography>
            );
          })}
        </Stack>
      </Box>
      <Box component="div" display={{ xs: "block", md: "none" }}>
        <Typography
          fontWeight="600"
          color={theme.palette.primary.main}
          fontSize="20px"
          height="100%"
          lineHeight="44px"
        >
          Home
        </Typography>
      </Box>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        width="100%"
        spacing={2}
      >
        <Box display={{ xs: "none", md: "block" }} component="div">
          <SearchInput
            searchInputParentBg={"#F0F0F0"}
            searchInputBg={"transparent"}
            searchInputParentBorder={0}
            searchInputBorder={0}
            searchInputParentBoxShadow={"none"}
            placeholderValue={"Search for products or brands....."}
            searchInputParentWidth={{ md: "290px", lg: "362px" }}
            searchInputWidth={"100%"}
            searchInputType={"search"}
            searchInputPadding={"0 0 0 50px"}
            searchInputHeight={"44px"}
          />
        </Box>
        <Box display={{ xs: "none", md: "block" }} component="div">
          <IconBtn
            iconsNames={[
              "FavoriteBorderOutlinedIcon",
              "PermIdentityOutlinedIcon",
              "LocalMallOutlinedIcon",
            ]}
            iconColor={theme.palette.primary.main}
            iconPosition={"relative"}
            pseudoIconId={"LocalMallOutlinedIcon"}
            pseudoType={"&::after"}
            pseudoContent={"''"}
            pseudoPosition={"absolute"}
            pseudoTopPos={"7px"}
            pseudoRightPos={"8px"}
            pseudoWidth={"7px"}
            pseudoHeight={"7px"}
            pseudoBorder={"2px solid white"}
            pseudoBorderRadius={"50%"}
            pseudoBackgroundColor={"orange"}
            pseudoZIndex={1}
          />
        </Box>
        <Box display={{ xs: "block", md: "none" }} component="div">
          <IconBtn
            iconsNames={[
              "LocalHospitalOutlinedIcon",
              "SearchOutlinedIcon",
              "NotificationsNoneOutlinedIcon",
            ]}
            iconColor={theme.palette.primary.main}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
