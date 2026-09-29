import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Solution from "./pages/Solution";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;