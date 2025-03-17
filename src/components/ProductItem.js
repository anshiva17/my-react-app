import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Heading from "./heading";
import ReusableModal from "./ReusableModal";

const products = [
  {
    id: 1,
    imgSrc: require("../assets/img/product-1.jpg"),
    title: "Solar System",
    description:
      "Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea dolores ut nonumy, sea est rebum dolore dolor.",
  },
  {
    id: 2,
    imgSrc: require("../assets/img/product-2.jpg"),
    title: "Wind Turbine",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 3,
    imgSrc: require("../assets/img/product-3.jpg"),
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
                <Heading text={product.title} level={3} className="m-0" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProduct && (
        <ReusableModal
          show={showModal}
          handleClose={closeModal}
          title={activeProduct.title}
        >
          <img
            src={activeProduct.imgSrc}
            alt={activeProduct.title}
            className="img-fluid mb-4"
          />
          <p>{activeProduct.description}</p>
        </ReusableModal>
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
