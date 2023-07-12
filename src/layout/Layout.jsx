import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../components";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
