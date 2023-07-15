import React from 'react'
import NewArrivals from '../components/newArrivals/NewArrivals'
import TopCategories from '../components/topCategories/TopCategories';
import { HeroSection } from "../components";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TopCategories />
      <NewArrivals />
    </>
  );
};

export default Home;
