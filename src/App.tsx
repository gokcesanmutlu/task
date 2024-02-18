import Header from "./components/Header";
import Footer from "./components/Footer";
import Coppyright from "./components/Coppyright";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import UndefinedPage from "./pages/UndefinedPage";
import React from "react";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<UndefinedPage />} />
        </Routes>
        <Footer />
        <Coppyright />
      </BrowserRouter>
    </>
  );
};

export default App;
