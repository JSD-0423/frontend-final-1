import React from "react";
import { SocialIcon, TitledList } from "../index.js";
import { Box } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "../../assets/InstaIcon.png";
import FacebookIcon from "../../assets/FacebookIcon.png";
import LocationOnIcon from "../../assets/location.png";

function Footer() {
  const products = ["Featured", "Trendy", "Brands"];
  const category = [
    "Skincare",
    "Personal Care",
    "Handbags",
    "Apparels",
    "Watchers",
    "Eye Wear",
    "Jewellery",
  ];

  return (
    <Box
      maxWidth="100%"
      sx={{
        backgroundColor: "primary.main",
        display: "flex",
        flexDirection: ["column", "column", "row"],
        justifyContent: "space-between",
        color: "lightText.main",
        paddingTop: "2rem",
        paddingLeft: ["1rem", "2.75rem", "3.75rem"],
        paddingRight: ["1rem", "3.8rem", "3.8rem"],
        height: ["auto", "auto", "342px"],
        marginTop: "20px",
      }}
    >
      <Box sx={{ display: "flex", gap: "3.75rem" }}>
        <TitledList title="Shop by Category" list={category} />
        <TitledList title="Shop by Products" list={products} />
      </Box>

      <Box sx={{ paddingTop: "1.6rem" }}>
        <Box
          sx={{
            color: "primaryTint.main",
            display: "flex",
            justifyContent: ["flex-start", "flex-start", "flex-end"],
            gap: "1rem",
            marginBottom: "26px",
          }}
        >
          <SocialIcon
            src={FacebookIcon}
            alt="Facebook Icon"
            style={{
              width: "52px",
              paddingTop: "6px",
              paddingBottom: "2px",
              paddingLeft: "17px",
              paddingRight: "17px",
              height: "40px",
            }}
          />
          <SocialIcon
            src={InstagramIcon}
            alt="Instagram Icon"
            style={{
              width: "52px",
              paddingTop: "8px",
              paddingLeft: "9px",
              paddingRight: "9px",
              paddingBottom: "4px",
              height: "43px",
            }}
          />
          <SocialIcon src={TwitterIcon} isMUIIcon />
          <SocialIcon src={YouTubeIcon} isMUIIcon />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              color: "bright.main",
              display: "flex",
              alignItems: "end",
              alignSelf: ["flex-start", "flex-start", "flex-end"],
              gap: "10px",
            }}
          >
            <img
              src={LocationOnIcon}
              alt="location icon"
              style={{ width: " 24px", height: "24px", flexShrink: "0" }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "18px",
              }}
            >
              United States
            </span>
          </Box>
          <Box
            sx={{
              color: "lightText.main",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "10px",
              marginBottom: "15px",
            }}
          >
            © 2021 | Cora Leviene All Rights Reserved
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
