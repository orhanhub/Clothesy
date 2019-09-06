const React = require("react");
const Carousel = require("react-bootstrap/Carousel");

const ImageGallery = ({ initialProduct }) => {
  const cropImage = {
    width: "775px",
    height: "550px",
    objectFit: "cover"
  };

  return (
    <div style={{ overflow: "hidden", marginTop: "20px", width: "775px" }}>
      <Carousel wrap={true}>
        {initialProduct.productStyles[0]
          ? initialProduct.productStyles[0].photos.map((photo, i) => {
              return (
                <Carousel.Item key={i}>
                  <img style={cropImage} src={photo.url} />
                </Carousel.Item>
              );
            })
          : null}
      </Carousel>
    </div>
  );
};

module.exports = ImageGallery;
