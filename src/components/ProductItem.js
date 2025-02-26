import { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import product1 from "../assets/img/product-1.jpg";
import product2 from "../assets/img/product-2.jpg";
import product3 from "../assets/img/product-3.jpg";
import carousel1 from "../assets/img/carousel-1.jpg";

const products = [
  {
    id: 1,
    imgSrc: product1,
    title: "Solar System",
    description:
      "Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor gubergren dolor dolor dolor.",
  },
  {
    id: 2,
    imgSrc: product2,
    title: "Wind Turbine",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 3,
    imgSrc: product3,
    title: "Wind Generator",
    description:
      "Justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
];

const ProductItem = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const openModal = (product) => {
    setActiveProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveProduct(null);
  };

  return (
    <Container className="py-5" id="products">
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-4 mb-3" key={product.id}>
            <div className="product-item mb-2">
              <div className="product-img position-relative">
                <img
                  className="img-fluid"
                  src={product.imgSrc}
                  alt={product.title}
                />
                <Button
                  variant="primary"
                  className="plus-btn position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => openModal(product)}
                >
                  <i className="fa fa-2x fa-plus text-white"></i>
                </Button>
              </div>
              <div className="bg-secondary text-center p-4">
                <h3 className="m-0">{product.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProduct && (
        <Modal show={showModal} onHide={closeModal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Solar Energy System</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            <img
              src={carousel1}
              alt="Solar Energy System"
              className="img-fluid mb-4"
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
      )}

      <style>{`
        .product-img {
          position: relative;
          overflow: hidden;
        }

        .plus-btn {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-img:hover .plus-btn {
          opacity: 1;
        }
      `}</style>
    </Container>
  );
};

export default ProductItem;
