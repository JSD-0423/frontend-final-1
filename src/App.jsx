import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import { Home } from "./pages";
import Details from "./pages/Details";

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
          path:'/details',
          element:<Details />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
