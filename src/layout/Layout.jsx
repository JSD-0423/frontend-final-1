import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { CartPopup } from "../components/cartPopup";
import { ProductListing } from "../components/category";
import {
  Footer,
  Header,
  CustomContainer,
  CustomBreadcrumbs,
} from "../components/shared/index";
import ProductDetailsCarousel from "../Skeletons/ProductDetailsCarousel";

const Layout = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <Header togglePopup={togglePopup} setIsSearching={setIsSearching} />
      {isSearching ? (
        <CustomContainer>
          <CustomBreadcrumbs isSearching={isSearching} />
          <ProductListing />
        </CustomContainer>
      ) : (
        <>
          <CustomBreadcrumbs />
          <Outlet />
          {/* <ProductDetailsCarousel /> */}
        </>
      )}
      <Footer />
      <CartPopup isPopupVisible={isPopupVisible} hidePopup={hidePopup} />
    </>
  );
};

export default Layout;
