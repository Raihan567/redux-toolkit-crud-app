import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "../features/AddBook";
import ListView from "../features/ListView";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Error from "../pages/Error";
import Home from "../pages/Home";

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<ListView />} />
          <Route path="/add-books" element={<AddBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default index;
