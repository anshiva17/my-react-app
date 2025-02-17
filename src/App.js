import "./css/style.css";

import "./App.css";
import "./components/Navbar/navbar.css";
import "./scss/bootstrap/dist/css/bootstrap.min.css";

import MyComponent from "./components/MyComponent";
import Header from "./components/header";
import Navbar from "./components/Navbar/navbar"; // Import Navbar component
import Carousel from "./components/carousel"; // Import Carousel component
import About from "./components/about"; // Import About component
import Services from "./components/services"; // Import Services component
import Gallery from "./components/gallery"; // Import Services componentcomponent
import Team from "./components/team"; // Import Services component
import Faqs from "./components/faqs";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";
import SolarEnergyModal from "./components/modal";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MyComponent /> {/* Using MyComponent inside App */}
          <Header /> {/* Using Header inside App */}
        </p>
      </header>
      <Router>
        <Navbar /> {/* Using Navbar inside App */}
      </Router>
      <Carousel />
      <About />
      <Services />
      <Gallery />
      <Team />
      <Faqs />
      <Testimonial />
      <Contact />
      <Footer />
      <SolarEnergyModal />
    </div>
  );
}

export default App;
