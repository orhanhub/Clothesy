const React = require("react");
const ImageGalleryList = require("./ImageGalleryList.jsx");
const Carousel = require("react-bootstrap/Carousel");
const Image = require("react-bootstrap/Image");

const ImageGallery = props => {
  const cropImage = {
    width: "700px",
    height: "550px",
    "object-fit": "cover",
    padding: "10px"
  };
  return (
    <Carousel style={cropImage}>
      <Carousel.Item>
        <img
          style={cropImage}
          src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={cropImage}
          src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={cropImage}
          src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

module.exports = ImageGallery;
