const React = require("react");
const Carousel = require("react-bootstrap/Carousel");

const ImageGallery = ({
  initialProduct,
  styles,
  pictureIndex,
  handleSelect,
  handleExpand,
  expandedView
}) => {
  const cropImage = {
    width: "100%",
    height: "600px",
    objectFit: "cover",
    cursor: "zoom-in"
  };

  const expandImage = {
    width: "100%",
    height: "1000px",
    objectFit: "cover"
  };

  const handleClick = () => {
    handleExpand();
  };

  return (
    <div>
      <Carousel
        wrap={true}
        activeIndex={pictureIndex}
        onSelect={handleSelect}
        style={{ marginTop: "20px" }}
      >
        {initialProduct.productStyles[0] && !styles.photos
          ? initialProduct.productStyles[0].photos.map((photo, i) => {
              return (
                <Carousel.Item key={i}>
                  {!expandedView ? (
                    <img
                      style={cropImage}
                      src={photo.url}
                      onClick={handleClick}
                      alt="carousel image"
                    />
                  ) : (
                    <img
                      style={expandImage}
                      src={photo.url}
                      onClick={handleClick}
                      alt="carousel image"
                    />
                  )}
                </Carousel.Item>
              );
            })
          : null}

        {styles.photos
          ? styles.photos.map((photo, i) => {
              return (
                <Carousel.Item key={i}>
                  {!expandedView ? (
                    <img
                      style={cropImage}
                      src={photo.url}
                      onClick={handleClick}
                      alt="carousel image"
                    />
                  ) : (
                    <img
                      style={expandImage}
                      src={photo.url}
                      onClick={handleClick}
                      alt="carousel image"
                    />
                  )}
                </Carousel.Item>
              );
            })
          : null}
      </Carousel>
    </div>
  );
};

module.exports = ImageGallery;
