import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import { Home } from "./pages";
import Pdp from "./pages/Pdp";

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
          element:<Pdp />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
