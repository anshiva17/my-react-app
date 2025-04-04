import React, { useEffect } from "react";
import ImageComponent from "../components/ImageComponent";
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
    <div className="container-fluid p-0 mb-5 pb-5 w-100" id="home">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner w-100">
          <div
            className="carousel-item position-relative active"
            style={{ height: "100vh", minHeight: "400px" }}
          >
            <ImageComponent
              className="w-100 h-100"
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
              className="w-100 h-100"
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
          className="carousel-control-prev custom-carousel-btn"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
          aria-label="Previous"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>

        <button
          className="carousel-control-next custom-carousel-btn"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
          aria-label="Next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>

        <style>{`
          .custom-carousel-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
            z-index: 1055;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }

          .custom-carousel-btn:hover {
            transform: translateY(-50%) scale(1.2);
            background-color: rgba(255, 255, 255, 0.8);
          }

          .carousel-control-prev {
            left: 20px;
          }

          .carousel-control-next {
            right: 20px;
          }

          #header-carousel .carousel-inner {
            width: 100%;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Carousel;
