import React from "react";

const Services = () => {
  return (
    <div className="container-fluid py-5" id="service">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            Services
          </h6>
          <h1 className="font-secondary display-4">What We Cover</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-3">
            <div className="product-item mb-2">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="img/product-1.jpg"
                  alt="Solar System"
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  <i className="fa fa-2x fa-plus text-white"></i>
                </button>
              </div>
              <div className="bg-secondary text-center p-4">
                <h3 className="m-0">Solar System</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="product-item mb-2">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="img/product-2.jpg"
                  alt="Wind Turbine"
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  <i className="fa fa-2x fa-plus text-white"></i>
                </button>
              </div>
              <div className="bg-secondary text-center p-4">
                <h3 className="m-0">Wind Turbine</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="product-item mb-2">
              <div className="product-img">
                <img
                  className="img-fluid"
                  src="img/product-3.jpg"
                  alt="Wind Generator"
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  <i className="fa fa-2x fa-plus text-white"></i>
                </button>
              </div>
              <div className="bg-secondary text-center p-4">
                <h3 className="m-0">Wind Generator</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
