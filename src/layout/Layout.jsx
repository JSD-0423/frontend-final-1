import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, CustomBreadcrumbs, CartPopup } from "../components";

const Layout = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <Header togglePopup={togglePopup} />
      <CustomBreadcrumbs />
      <Outlet />
      <Footer />
      <CartPopup isPopupVisible={isPopupVisible} hidePopup={hidePopup} />
    </>
  );
};

export default Layout;
