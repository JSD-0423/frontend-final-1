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
import { getAllProducts } from "../API/API";

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
