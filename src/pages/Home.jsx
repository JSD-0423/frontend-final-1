import React from 'react'
import NewArrivals from '../components/newArrivals/NewArrivals'
import TopCategories from '../components/topCategories/TopCategories';

const Home = () => {
  const collections = ['Handbags','Watches','Skincare','Jewellery','Apparels'];
  return (
    <>
      <TopCategories collections={collections} />
      <NewArrivals />
    </>
  )
}

export default Home