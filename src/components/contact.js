import React, { useState } from "react";

const Contact = () => {
  // State hooks for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for form submission success
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation here if needed
    // For now, we are assuming that the form will be successfully submitted
    setIsSubmitted(true);
    // Optionally, reset the form fields after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container-fluid py-5" id="contact">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            Contact
          </h6>
          <h1 className="font-secondary display-4">Get In Touch</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form">
              {/* Display success message after form submission */}
              {isSubmitted && (
                <div id="success" className="alert alert-success">
                  Your message has been sent successfully!
                </div>
              )}
              <form
                name="sentMessage"
                id="contactForm"
                onSubmit={handleSubmit}
                noValidate="novalidate"
              >
                <div className="form-row">
                  <div className="col-sm-6 control-group">
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="col-sm-6 control-group">
                    <input
                      type="email"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 py-4 px-3"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control bg-secondary border-0 py-2 px-3"
                    rows="6"
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-primary font-weight-bold py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
