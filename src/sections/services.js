import React from "react";
import Heading from "../components/heading";
import ProductItem from "../components/ProductItem";

const Services = () => {
  return (
    <div className="container-fluid py-5" id="service">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <Heading text="Services" />
          <Heading
            text="What We Cover"
            level={1}
            className="font-secondary display-4"
          />
        </div>
        <ProductItem />
      </div>
    </div>
  );
};

export default Services;
