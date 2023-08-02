import React from "react";
import { getHandPickedProduct } from "../API/API";

import {
  HandPickedCollections,
  HeroSection,
  NewArrivals,
  ShopByBrands,
  TopCategories,
  FilterBasedCollection,
} from "../components/home/index";
import useAxiosFetch from "../hooks/useAxiosFetch";

const Home = () => {
  const handPickedCollections = useAxiosFetch(getHandPickedProduct);
  return (
    <>
      <HeroSection />
      <TopCategories />
      <NewArrivals />
      <HandPickedCollections handPickedCollections={handPickedCollections} />
      <ShopByBrands />
      <FilterBasedCollection />
    </>
  );
};

export default Home;
