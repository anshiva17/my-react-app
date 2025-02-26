import React from "react";

import ProductItem from "./ProductItem";

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
        <ProductItem />
      </div>
    </div>
  );
};

export default Services;
