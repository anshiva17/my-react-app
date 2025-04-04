import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // State to manage the newsletter email input
  const [email, setEmail] = useState("");

  // Handle newsletter email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission for the newsletter
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Newsletter subscribed with email: ${email}`);
      setEmail(""); // Clear the input after submission
    } else {
      alert("Please enter a valid email address!");
    }
  };

  return (
    <div>
      {/* Footer Section Start */}
      <div
        className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
        style={{ marginTop: "90px" }}
      >
        <div className="row pt-5">
          {/* Office, Email, Call Us */}
          <div className="col-12 mb-4 px-4">
            <div
              className="row mb-5 p-4"
              style={{ background: "rgba(256, 256, 256, .05)" }}
            >
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: "5px" }}
                  >
                    Our Office
                  </h5>
                  <p className="mb-4 m-md-0">123 Street, New York, USA</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: "5px" }}
                  >
                    Email Us
                  </h5>
                  <p className="mb-4 m-md-0">info@example.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-md-center">
                  <h5
                    className="text-primary text-uppercase mb-2"
                    style={{ letterSpacing: "5px" }}
                  >
                    Call Us
                  </h5>
                  <p className="m-0">+012 345 6789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Content Section */}
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <p>
                  Et et amet ut elitr ipsum sit dolor dolor dolore. Sit accusam
                  elitr ut diam sit rebum. Eirmod duo kasd diam vero labore sea,
                  est et et lorem ut at erat, gubergren ipsum et ipsum elitr et
                  rebum rebum
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-outline-light btn-lg-square"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: "5px" }}
                >
                  Our Products
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2"></i>Solar System
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2"></i>Wind Turbine
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2"></i>Wind Generator
                  </a>
                  <a className="text-white btn-scroll mb-2" href="#service">
                    <i className="fa fa-angle-right mr-2"></i>Solar Energy
                  </a>

                  <Link to="/hot-countries" className="text-white btn-scroll">
                    <i className="fa fa-angle-right mr-2"></i>Hot Countries
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-5 col-md-12 mb-5">
            <h5
              className="text-primary text-uppercase mb-4"
              style={{ letterSpacing: "5px" }}
            >
              Newsletter
            </h5>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control border-light"
                  style={{ padding: "30px" }}
                  placeholder="Your Email Address"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary px-4"
                    onClick={handleNewsletterSubmit}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div
        className="container-fluid bg-dark text-white text-center border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, .05) !important" }}
      >
        <p className="m-0 text-white">
          &copy; <a href="#">Solarumpire.com</a>. All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
