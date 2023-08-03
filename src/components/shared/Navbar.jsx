import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { SearchInput, IconBtn, ScrollToTopLink } from "./index";
import { TextSkeleton } from "../../Skeletons";

const Navbar = ({ togglePopup, setIsSearching, allCategories }) => {
  const theme = useTheme();
  const { data, loading } = allCategories;

  const desktopIcons = [
    {
      icon: FavoriteBorderOutlinedIcon,
      functionality: () => console.log("Favorites "),
    },
    {
      icon: PermIdentityOutlinedIcon,
      functionality: () => console.log("profile "),
    },
    { icon: LocalMallOutlinedIcon, functionality: togglePopup },
  ];

  const mobileIcons = [
    LocalHospitalOutlinedIcon,
    NotificationsNoneOutlinedIcon,
    SearchOutlinedIcon,
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
          {!loading ? (
            data?.categories?.map(({ category, id }) => {
              return (
                <ScrollToTopLink
                  style={{
                    textDecoration: "none",
                    color: theme.palette.dark.main,
                    "&:visited": {
                      color: theme.palette.primary.main,
                    },
                  }}
                  key={id}
                  to={`/category/${category}`}
                >
                  <Typography
                    sx={{
                      color: "dark.main",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "primary.main",
                      },
                    }}
                    lineHeight="18px"
                    fontSize="14px"
                  >
                    {category}
                  </Typography>
                </ScrollToTopLink>
              );
            })
          ) : (
            <TextSkeleton />
          )}
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
            setIsSearching={setIsSearching}
            searchInputParentBg={"#F0F0F0"}
            searchInputBg={"transparent"}
            searchInputParentBorder={0}
            searchInputBorder={0}
            searchInputParentBoxShadow={"none"}
            placeholderValue={"Search for products or brands....."}
            searchInputParentWidth={{ md: "290px", lg: "362px" }}
            searchInputWidth={"100%"}
            searchInputPadding={"0 0 0 50px"}
            searchInputHeight={"44px"}
          />
        </Box>
        <Box display={{ xs: "none", md: "flex" }} component="div">
          {desktopIcons.map(({ icon, functionality }, index) => {
            return (
              <IconBtn
                key={index}
                Icon={icon}
                handleClick={functionality}
                btnStyle={{
                  color: `${theme.palette.primary.main}`,
                  position: "relative",
                }}
                pseudoIconId={LocalMallOutlinedIcon}
                pseudoType={"&::after"}
                pseudoStyle={{
                  content: "''",
                  position: "absolute",
                  top: "7px",
                  right: "8px",
                  width: "7px",
                  height: "7px",
                  border: "2px solid white",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                  zIndex: 1,
                }}
              />
            );
          })}
        </Box>
        <Box display={{ xs: "flex", md: "none" }} component="div">
          {mobileIcons.map((icon, index) => {
            return (
              <IconBtn
                key={index}
                Icon={icon}
                btnStyle={{
                  color: `${theme.palette.primary.main}`,
                }}
              />
            );
          })}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
