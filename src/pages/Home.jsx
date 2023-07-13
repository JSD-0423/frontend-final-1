import React from 'react'
import NewArrivals from '../components/newArrivals/NewArrivals'
import TopCategories from '../components/topCategories/TopCategories';
import { Box } from "@mui/material";
import { HeroSection } from "../components";

const Home = () => {
  const collections = ['Handbags','Watches','Skincare','Jewellery','Apparels'];
  return (
    <Box sx={{ padding: "20px" }}>
      <HeroSection />
    </Box>
  );
};

export default Home;
