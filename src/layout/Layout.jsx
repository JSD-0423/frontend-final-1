import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
