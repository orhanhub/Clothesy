const React = require("react");
const { GridList } = require("@material-ui/core");
const { GridListTile } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const ImageGalleryList = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450
    }
  }));
  const classes = useStyles();

  return (
    <div>
      <GridList cellHeight={150} cols={1}>
        <GridListTile>
          <img src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
        </GridListTile>
        {/* <GridListTile>
          <img src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
        </GridListTile> */}
      </GridList>
    </div>
  );
};

module.exports = ImageGalleryList;
