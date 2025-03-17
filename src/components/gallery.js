import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import Heading from "./heading";
import ReusableModal from "./ReusableModal";

import gallery1 from "../assets/img/gallery-1.jpg";
import gallery2 from "../assets/img/gallery-2.jpg";
import gallery3 from "../assets/img/gallery-3.jpg";
import gallery4 from "../assets/img/gallery-4.jpg";
import gallery5 from "../assets/img/gallery-5.jpg";
import gallery6 from "../assets/img/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const GalleryCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const openLightbox = (img) => {
    setActiveImage(img);
    setShowLightbox(true);
  };

  const visibleImages = [
    ...images.slice(startIndex, startIndex + 5),
    ...images.slice(0, Math.max(0, 5 - (images.length - startIndex))),
  ];

  return (
    <Container fluid className="bg-gallery py-5" id="project">
      <div className="section-title text-center mb-5">
        <Heading text="Project" />
        <Heading
          text="Project Photo Gallery"
          level={1}
          className="font-secondary display-4 text-white"
        />
      </div>

      <div className="d-flex justify-content-center mb-4 gap-3">
        <Button
          variant="primary"
          onClick={handlePrev}
          className="d-flex align-items-center arrow-btn"
        >
          <FaChevronLeft size={30} />
        </Button>
        <Button
          variant="primary"
          onClick={handleNext}
          className="d-flex align-items-center arrow-btn"
        >
          <FaChevronRight size={30} />
        </Button>
      </div>

      <div className="d-flex justify-content-center">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="position-relative mx-2 image-container"
            onClick={() => openLightbox(img)}
            style={{ cursor: "pointer", overflow: "hidden" }}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="img-fluid"
              style={{
                maxHeight: "300px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
            <div
              className="btn btn-primary position-absolute plus-icon"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <FaPlus size={40} color="white" />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .image-container:hover .plus-icon {
          opacity: 1 !important;
        }
        .image-container:hover img {
          transform: scale(0.9);
        }
        .arrow-btn {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <ReusableModal
        show={showLightbox}
        handleClose={() => setShowLightbox(false)}
      >
        <img src={activeImage} alt="Lightbox" className="img-fluid" />
      </ReusableModal>
    </Container>
  );
};

export default GalleryCarousel;
