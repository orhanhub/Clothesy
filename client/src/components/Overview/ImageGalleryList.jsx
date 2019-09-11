const React = require("react");
const { GridList } = require("@material-ui/core");
const { GridListTile } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const ImageGalleryList = ({ initialProduct, styles, handleSelect }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "90px",
      height: "100px",
      marginTop: "20px"
    }
  }));
  const classes = useStyles();
  const initialProductHolder = initialProduct;
  const handleClick = index => {
    handleSelect(index);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={100} cols={1} spacing={6}>
        {initialProductHolder.productStyles[0] && !styles.photos
          ? initialProductHolder.productStyles[0].photos.map((photo, i) => {
              return (
                <GridListTile key={i} onClick={() => handleClick(i)}>
                  <img src={photo.url} alt="image thumbnails" />
                </GridListTile>
              );
            })
          : null}

        {styles.photos
          ? styles.photos.map((photo, i) => {
              return (
                <GridListTile key={i} onClick={() => handleClick(i)}>
                  <img src={photo.url} alt="image thumbnails" />
                </GridListTile>
              );
            })
          : null}
      </GridList>
    </div>
  );
};

module.exports = ImageGalleryList;
