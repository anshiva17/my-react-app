import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing BrowserRouter and Routes
import Navbar from "./components/Navbar/navbar";
import Carousel from "./components/carousel";
import About from "./components/about";
import Services from "./components/services";
import GalleryCarousel from "./components/gallery";
import Team from "./components/team";
import Faqs from "./components/faqs";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import HotCountries from "./components/HotCountries"; // Import HotCountries component
import Footer from "./components/footer";

import "./App.css";
import "./lib/lightbox/css/lightbox.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Router basename="/my-react-app">
        {/* Wrap everything with Router */}
        <Navbar />
        <Carousel />
        <About />
        <Services />
        <GalleryCarousel />
        <Team />
        <Faqs />
        <Testimonial />
        <Contact />

        {/* Define your Routes */}
        <Routes>
          <Route path="/HotCountries" element={<HotCountries />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
