import React from "react";

const About = () => {
  return (
    <div className="container-fluid py-5" id="about">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img
              className="img-fluid mb-4 mb-lg-0"
              src="img/about.jpg"
              alt="About Us"
            />
          </div>
          <div className="col-lg-7">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: "3px" }}
            >
              About Us
            </h6>
            <h1 className="display-4 mb-3">
              <span className="text-primary">25+ Years Experience</span> In
              Solar Power Industry
            </h1>
            <p>
              At sed est eirmod sanctus et amet diam magna. Dolore clita magna
              sed sed stet et, at magna rebum eirmod sanctus ut sed, stet tempor
              dolore rebum sit duo, dolore tempor sit est sit sanctus, sit justo
              sit invidunt clita ut justo diam magna. Erat eos nonumy labore
              dolor. Dolore kasd no et et et elitr. Erat sea dolor elitr diam
              sed lorem rebum et vero.
            </p>
            <button
              className="btn btn-primary font-weight-bold py-3 px-5 mt-2"
              type="button"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
