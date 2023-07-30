import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import { Home, ProductDetails, Category, Checkout, Cart } from "./pages";


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:'/product-details',
          element:<ProductDetails />
        },
        {
          path:'/category',
          element:<Category />
        },
        {
          path:'/checkout',
          element:<Checkout />
        },
        {
          path:'/cart',
          element:<Cart />
        }
      ],
    },
  ], { basename: process.env.PUBLIC_URL });

  return <RouterProvider router={router} />;
};

export default App;
