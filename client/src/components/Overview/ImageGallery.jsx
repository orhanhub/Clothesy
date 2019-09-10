const React = require("react");
const Carousel = require("react-bootstrap/Carousel");

const ImageGallery = ({
  initialProduct,
  styles,
  pictureIndex,
  handleSelect
}) => {
  const cropImage = {
    width: "775px",
    height: "550px",
    objectFit: "cover"
  };
  const initialProductHolder = initialProduct;

  return (
    <div style={{ overflow: "hidden", marginTop: "20px", width: "775px" }}>
      <Carousel wrap={true} activeIndex={pictureIndex} onSelect={handleSelect}>
        {initialProductHolder.productStyles[0] && !styles.photos
          ? initialProductHolder.productStyles[0].photos.map((photo, i) => {
              return (
                <Carousel.Item key={i}>
                  <img style={cropImage} src={photo.url} />
                </Carousel.Item>
              );
            })
          : null}

        {styles.photos
          ? styles.photos.map((photo, i) => {
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
