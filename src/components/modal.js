import React, { useState } from "react";
// Import Button and Modal from react-bootstrap
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SolarEnergyModal = () => {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to open modal
  const handleShow = () => setShowModal(true);

  // Function to close modal
  const handleClose = () => setShowModal(false);

  return (
    <div>
      {/* Button to trigger modal */}
      <Button variant="primary" onClick={handleShow}>
        Open Solar Energy System Modal
      </Button>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Solar Energy System</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="img-fluid mb-4"
            src="../assets/img/carousel-1.jpg"
            alt="Solar Energy System"
          />
          <p>
            Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
            dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
            gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
            dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
            Stet at et nonumy erat et sed.
          </p>
          <p>
            Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
            dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
            gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
            dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
            Stet at et nonumy erat et sed.
          </p>
          <p>
            Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
            dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
            gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
            dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
            Stet at et nonumy erat et sed.
          </p>
          <p>
            Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
            dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
            gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
            dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
            Stet at et nonumy erat et sed.
          </p>
          <p>
            Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
            dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
            gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
            dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
            Stet at et nonumy erat et sed.
          </p>
          <p>
            Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
            dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
            gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
            dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
            Stet at et nonumy erat et sed.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SolarEnergyModal;
