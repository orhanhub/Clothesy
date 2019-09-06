const React = require("react");
const { GridList } = require("@material-ui/core");
const { GridListTile } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const ImageGalleryList = ({ initialProduct }) => {
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

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={100}
        cols={1}
        spacing={6}
        style={{ height: "550px" }}
      >
        {initialProduct.productStyles[0] ? (
          initialProduct.productStyles[0].photos.map((photo, i) => {
            return (
              <GridListTile key={i}>
                <img src={photo.thumbnail_url} />
              </GridListTile>
            );
          })
        ) : (
          <GridListTile></GridListTile>
        )}
      </GridList>
    </div>
  );
};

module.exports = ImageGalleryList;
