import React from "react";
import { getHandPickedProduct, getNewArrivals } from "../API/API";

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
  const newArrivalsData = useAxiosFetch(getNewArrivals);
  const handPickedCollections = useAxiosFetch(getHandPickedProduct);
  return (
    <>
      <HeroSection />
      <TopCategories categories={handPickedCollections} />
      <NewArrivals newArrivalsData={newArrivalsData} />
      <HandPickedCollections handPickedCollections={handPickedCollections} />
      <ShopByBrands />
      <FilterBasedCollection />
    </>
  );
};

export default Home;
