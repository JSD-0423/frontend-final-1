import React from "react";

import {
  HandPickedCollections,
  HeroSection,
  NewArrivals,
  ShopByBrands,
} from "../components";
const Home = () => {
  return (
    <>
      <HeroSection />
      <TopCategories />
      <NewArrivals />
      <HandPickedCollections />
      <ShopByBrands />
    </>
  );
};

export default Home;
