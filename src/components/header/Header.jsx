import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  useTheme,
} from "@mui/material";
import React from "react";
import { Navbar } from "../index.js";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = ({ togglePopup }) => {
  const theme = useTheme();
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
            sx={{ display: { xs: "none", md: "block" }, paddingLeft: "0px" }}
          >
            <Link underline="none" to="/">
              <img
                style={{ width: "108px", height: "22px" }}
                src={logo}
                alt="logo"
              />
            </Link>
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
          <Navbar togglePopup={togglePopup} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
