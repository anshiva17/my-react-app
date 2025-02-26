import React, { useEffect } from "react";
import ImageComponent from "./ImageComponent";
import carousel1 from "../assets/img/carousel-1.jpg";
import carousel2 from "../assets/img/carousel-2.jpg";

function Carousel() {
  useEffect(() => {
    const bootstrap = require("bootstrap");
    const carouselElement = document.getElementById("header-carousel");
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      ride: "carousel",
    });
  }, []);

  return (
    <div className="container-fluid p-0 mb-5 pb-5" id="home">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item position-relative active"
            style={{ height: "100vh", minHeight: "400px" }}
          >
            <ImageComponent
              className="position-absolute w-100 h-100"
              src={carousel1}
              alt="carousel-1"
              style={{ objectFit: "cover", top: 0, left: 0, zIndex: -1 }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4
                  className="text-white text-uppercase mb-4"
                  style={{ letterSpacing: "3px" }}
                >
                  Solar Energy
                </h4>
                <h3 className="display-2 font-secondary text-white mb-4">
                  Innovative Solar Solution For Home
                </h3>
                <a
                  className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll"
                  href="#contact"
                >
                  Get A Quote
                </a>
              </div>
            </div>
          </div>

          <div
            className="carousel-item position-relative"
            style={{ height: "100vh", minHeight: "400px" }}
          >
            <ImageComponent
              className="position-absolute w-100 h-100"
              src={carousel2}
              alt="carousel-2"
              style={{ objectFit: "cover", top: 0, left: 0, zIndex: -1 }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4
                  className="text-white text-uppercase mb-4"
                  style={{ letterSpacing: "3px" }}
                >
                  Solar Energy
                </h4>
                <h3 className="display-2 font-secondary text-white mb-4">
                  Let The Sun Work For Your Home
                </h3>
                <a
                  className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll"
                  href="#contact"
                >
                  Get A Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
