import React from "react";

import {
  HandPickedCollections,
  HeroSection,
  NewArrivals,
  ShopByBrands,
  TopCategories,
  FilterBasedCollection,
} from "../components/home/index";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { getNewArrivals } from "../API/API";

const Home = () => {
  const newArrivalsData = useAxiosFetch(getNewArrivals)
  return (
    <>
      <HeroSection />
      <TopCategories />
      <NewArrivals newArrivalsData={newArrivalsData} />
      <HandPickedCollections />
      <ShopByBrands />
      <FilterBasedCollection />
    </>
  );
};

export default Home;
