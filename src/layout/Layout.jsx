import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, CustomBreadcrumbs, CartPopup } from "../components";

const Layout = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const togglePopup = () => {
    setIsPopupVisible((prevState) => !prevState);
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
