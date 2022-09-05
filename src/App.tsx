import { StyledEngineProvider } from "@mui/material";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="home" element={<MainLayout />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
