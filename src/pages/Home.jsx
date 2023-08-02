import React from "react";

import {
  HandPickedCollections,
  HeroSection,
  NewArrivals,
  ShopByBrands,
  TopCategories,
  FilterBasedCollection,
} from "../components/home/index";

const Home = () => {

  return (
    <>
      <HeroSection />
      <TopCategories />
      <NewArrivals />
      <HandPickedCollections />
      <ShopByBrands />
      <FilterBasedCollection />
    </>
  );
};

export default Home;
