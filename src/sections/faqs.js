import React from "react";
import Heading from "../components/heading";

const FAQs = () => {
  return (
    <div className="container-fluid py-5" id="faqs">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <Heading text="Faqs" />
          <Heading className="display-4" text="Faqs" level={1} />
        </div>

        <div className="row">
          <div className="col-md-6 border-right border-primary">
            <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
              <h3 className="mb-4">Why Switch to Solar?</h3>
              <h5 className="mb-3">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                Vero dolor amet no eos ipsum erat
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                Lorem tempor tempor gubergren dolor dolor dolor
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                Nonumy tempor dolores sadipscing duo
              </h5>
              <h5 className="mb-0">
                <i className="fa fa-check text-success float-md-right mr-2 mr-md-0 ml-md-2"></i>
                Kasd dolor ea dolores ut nonumy
              </h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="text-center text-md-left ml-md-3">
              <h3 className="mb-4">Why Choose Us?</h3>
              <h5 className="mb-3">
                <i className="fa fa-check text-success mr-2"></i>
                Vero dolor amet no eos ipsum erat
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success mr-2"></i>
                Lorem tempor tempor gubergren dolor dolor dolor
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-success mr-2"></i>
                Nonumy tempor dolores sadipscing duo
              </h5>
              <h5 className="mb-0">
                <i className="fa fa-check text-success mr-2"></i>
                Kasd dolor ea dolores ut nonumy
              </h5>
            </div>
          </div>

          <div className="col-md-12 text-center pt-3">
            <a
              className="btn btn-primary font-weight-bold py-3 px-5 mt-4 btn-scroll"
              href="#contact"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
