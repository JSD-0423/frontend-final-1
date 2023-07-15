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
      <NewArrivals />
      <HandPickedCollections />
      <ShopByBrands />
    </>
  );
};

export default Home;
