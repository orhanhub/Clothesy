const React = require("react");
const { makeStyles } = require("@material-ui/core/styles");
const { GridList } = require("@material-ui/core");
const { GridListTile } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    height: 100
  }
}));

module.exports = ({ thumbnails, onClick }) => {
  const classes = useStyles();
  console.log(thumbnails);
  return (
    <div className={classes.root}>
      <GridList cellHeight={100} className={classes.gridList} cols={3}>
        {thumbnails.map(thumbnail => (
          <GridListTile
            onClick={() => onClick(thumbnail.url)}
            key={thumbnail}
            cols={1}
          >
            <img src={thumbnail.url} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
