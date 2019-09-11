const React = require("react");
const Carousel = require("react-bootstrap/Carousel");

const ImageGallery = ({
  initialProduct,
  styles,
  pictureIndex,
  handleSelect
}) => {
  const cropImage = {
    width: "100%",
    height: "600px",
    objectFit: "cover"
  };
  const initialProductHolder = initialProduct;

  return (
    <div>
      <Carousel
        wrap={true}
        activeIndex={pictureIndex}
        onSelect={handleSelect}
        style={{ marginTop: "20px" }}
      >
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
