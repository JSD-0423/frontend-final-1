import React from "react";
import { getAllProducts } from "../API/API";

import {
  HandPickedCollections,
  HeroSection,
  NewArrivals,
  ShopByBrands,
  TopCategories,
  FilterBasedCollection,
} from "../components";
import useAxiosFetch from "../hooks/useAxiosFetch";
const Home = () => {
  const { data } = useAxiosFetch(getAllProducts);
  console.log("data: ", data);
  
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
