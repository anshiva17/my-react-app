import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-1 py-lg-0 px-lg-5">
      <Link to="/" className="navbar-brand d-block d-lg-none">
        <h1 className="display-4 text-white text-uppercase m-0">Solar</h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        onClick={toggleMenu}
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse justify-content-between ${
          isOpen ? "show" : ""
        }`}
        id="navbarCollapse"
      >
        <div className="navbar-nav ml-auto py-0">
          <Link to="#home" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="#about" className="nav-item nav-link">
            About
          </Link>
          <Link to="#service" className="nav-item nav-link">
            Service
          </Link>
          <Link to="#project" className="nav-item nav-link">
            Project
          </Link>
        </div>
        <Link
          to="/"
          className="navbar-brand bg-primary px-4 mx-3 d-none d-lg-block"
        >
          <h1 className="display-4 text-white text-uppercase m-0">Solar</h1>
        </Link>
        <div className="navbar-nav mr-auto py-0">
          <Link to="#team" className="nav-item nav-link">
            Team
          </Link>
          <Link to="#faqs" className="nav-item nav-link">
            FAQs
          </Link>
          <Link to="#testimonial" className="nav-item nav-link">
            Testimonial
          </Link>
          <Link to="#contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
