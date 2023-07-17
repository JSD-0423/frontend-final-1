import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, CustomBreadcrumbs } from "../components";

const Layout = () => {
  return (
    <>
      <Header />
      <CustomBreadcrumbs  />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
