import React from 'react'
import NewArrivals from '../components/newArrivals/NewArrivals'
import TopCategories from '../components/topCategories/TopCategories';
import { HeroSection } from "../components";
import FilterBasedCollecttion from '../components/filterBasedCollection/FilterBasedCollecttion';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TopCategories />
      <NewArrivals />
      <FilterBasedCollecttion />
    </>
  );
};

export default Home;
