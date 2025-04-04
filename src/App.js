import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing BrowserRouter and Routes
import Navbar from "./components/Navbar/navbar";
import Carousel from "./sections/carousel";
import About from "./sections/about";
import Services from "./sections/services";
import GalleryCarousel from "./sections/gallery";
import Team from "./sections/team";
import Faqs from "./sections/faqs";
import Testimonial from "./sections/testimonial";
import Contact from "./sections/contact";
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
          <Route path="/hot-countries" element={<HotCountries />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
