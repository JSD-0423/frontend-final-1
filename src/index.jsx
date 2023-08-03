import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BreadCrumbsProvider } from "./context/BreadCrumbsContext";
import { SearchInputValueProvider } from "./context/SearchInputValue";
import { HandPickedIsClickedContextProvider } from "./context/HandPickedIsClickedContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BreadCrumbsProvider>
    <SearchInputValueProvider>
    <HandPickedIsClickedContextProvider>
      <App /> 
    </HandPickedIsClickedContextProvider>
    </SearchInputValueProvider>
    </BreadCrumbsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
