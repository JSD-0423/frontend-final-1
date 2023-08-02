import React, { useContext } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  useTheme,
} from "@mui/material";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";

import { Navbar, ScrollToTopLink } from "./index.js";
import logo from "../../assets/logo.jpg";
import { BreadCrumbsContext } from "../../context/BreadCrumbsContext";

const Header = ({ togglePopup, setIsSearching, allCategories }) => {
  const theme = useTheme();
  const { setPagesState } = useContext(BreadCrumbsContext);
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "bright.main", boxShadow: "none", width: "100%" }}
    >
      <Toolbar sx={{ height: "80px", width: "100%" }}>
        <Stack
          direction="row"
          alignItems="center"
          width="100%"
          spacing={{ xs: 0, md: 4 }}
        >
          <IconButton
            onClick={() => setPagesState(["/"])}
            sx={{ display: { xs: "none", md: "block" }, paddingLeft: "0px" }}
          >
            <ScrollToTopLink underline="none" to="/">
              <img
                style={{ width: "108px", height: "22px" }}
                src={logo}
                alt="logo"
              />
            </ScrollToTopLink>
          </IconButton>
          <IconButton sx={{ display: { xs: "block", md: "none" }, p: "0 8px" }}>
            <Box component="div" display="flex" alignItems="center">
              <SegmentOutlinedIcon
                sx={{
                  transform: "scale(-1)",
                  color: theme.palette.primary.main,
                }}
              />
            </Box>
          </IconButton>
          <Navbar
            togglePopup={togglePopup}
            setIsSearching={setIsSearching}
            allCategories={allCategories}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
