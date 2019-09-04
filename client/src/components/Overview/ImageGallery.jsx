const React = require("react");
const ImageGalleryList = require("./ImageGalleryList.jsx");
const Carousel = require("react-bootstrap/Carousel");

const ImageGallery = props => {
  const container = {
    position: "relative",
    "text-align": "center",
    color: "black"
  };
  const topLeft = {
    position: "absolute",
    top: "8px",
    left: "16px",
    padding: "20px"
  };
  return (
    // <div style={container}>
    //   <img src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
    //   <div style={topLeft}>
    //     <ImageGalleryList />
    //   </div>
    // </div>
    <div style={container}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

module.exports = ImageGallery;
