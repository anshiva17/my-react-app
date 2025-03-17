import { useState } from "react";
import Heading from "./heading";
import { Container, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonial1 from "../assets/img/testimonial-1.jpg";
import testimonial2 from "../assets/img/testimonial-2.jpg";

const testimonials = [
  {
    image: testimonial1,
    text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebam elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
    name: "Client Name",
    profession: "Profession",
  },
  {
    image: testimonial2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Doe",
    profession: "Designer",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container-fluid py-5" id="testimonial">
      <Container className="py-5">
        <div
          className="section-title position-relative text-center"
          style={{ marginBottom: "40px" }}
        >
          <Heading text="Testimonial" />

          <Heading className="display-4" text="Our Clients Say" level={1} />
        </div>

        <div className="d-flex justify-content-center mb-5 gap-3">
          <Button variant="primary" onClick={handlePrev} className="arrow-btn">
            <FaChevronLeft size={30} />
          </Button>
          <Button variant="primary" onClick={handleNext} className="arrow-btn">
            <FaChevronRight size={30} />
          </Button>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="img-fluid mx-auto mb-3 rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <p style={{ fontSize: "22px" }}>{testimonials[index].text}</p>
              <h4>{testimonials[index].name}</h4>
              <span>{testimonials[index].profession}</span>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .arrow-btn {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;
