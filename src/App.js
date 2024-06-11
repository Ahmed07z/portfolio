import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Container/HeroSection/Hero";
import Contactus from "./Components/ContactButton/Contactus";
import About from "./Container/About/About";
import Skills from "./Container/Skills/Skills";
import Testimonials from "./Container/Testimonials Section/Testimonials";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
