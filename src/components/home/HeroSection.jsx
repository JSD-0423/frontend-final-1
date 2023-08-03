import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import HeroSectionImage1 from "../../assets/heroSection1.png";
import HeroSectionImage2 from "../../assets/heroSection2.svg";
import { TextButton, Carousel, CustomContainer, ScrollToTopLink } from "../shared/index";

const HeroSection = () => {
  const images = [
    {
      imgPath: HeroSectionImage1,
      element: (
        <Box
          sx={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: ["1px", "4px", "15px"],
            position: "absolute",
            right: "0px",
            width: ["218px", "450px", "697px"],
            top: ["12px", "26px", "50px"],
            height: ["116px", "214px", "316px"],
            backgroundColor: "rgba(222, 222, 222, 0.7)",
            backdropFilter: "blur(2px)",
            borderRadius: "15px 0px 0px 15px",
            paddingLeft: ["11px", "25px", "47px"],
            paddingTop: ["7px", "8px", "25px"],
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "primary.main",
              fontWeight: "800",
              fontSize: ["27px", "50px", "60px"],
            }}
          >
            Carry your Funk
          </Typography>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: "500",
              fontSize: ["14px", "22px", "28px"],
              lineHeight: ["18px", "30px", "38px"],
              maxWidth: "490px",
            }}
          >
            Trendy handbags collection for your party animal
          </Typography>
          <ScrollToTopLink to="/">
            <TextButton
              text="See more"
              icon={<ArrowForwardIcon />}
              style={{ alignSelf: "flex-start", marginTop: "20px" }}
            />
          </ScrollToTopLink>
        </Box>
      ),
    },
    {
      imgPath: HeroSectionImage2,
      element: "",
    },
  ];

  return (
    <CustomContainer>
      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
          marginBottom: ["30px", "45px", "68px"],
          display: "flex",
        }}
      >
        <Box sx={{ borderRadius: "20px", width: "100%" }}>
          <Carousel images={images} />
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default HeroSection;
