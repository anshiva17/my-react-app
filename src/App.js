import "./App.css";

import "./lib/lightbox/css/lightbox.min.css";

import "./css/style.css";

import Navbar from "./components/Navbar/navbar"; // Import Navbar component
import Carousel from "./components/carousel"; // Import Carousel component
import About from "./components/about"; // Import About component
import Services from "./components/services"; // Import Services component
import GalleryCarousel from "./components/gallery"; // Import Services componentcomponent
import Team from "./components/team"; // Import Services component
import Faqs from "./components/faqs";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";

import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

function App() {
  return (
    <div className="App">
      <Router basename="/my-react-app">
        <Navbar /> {/* Using Navbar inside App */}
        <Carousel />
        <About />
        <Services />
        <GalleryCarousel />
        <Team />
        <Faqs />
        <Testimonial />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}
console.log("App component rendered!");

export default App;
