import React from "react";
import Heading from "./heading";

const GoogleForm = () => {
  return (
    <div className="container-fluid py-5" id="contact">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <Heading text="Contact" />

          <Heading
            text="Get In Touch"
            className="font-secondary display-4"
            level={1} // You can specify any heading level (h1 to h6)
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSffhTKcd5SCz0u5dRAUPIn7nOHy2mmQDbDv4_E9Y4cEVqc99w/viewform?embedded=true"
                width="640"
                height="821"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Google Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleForm;
