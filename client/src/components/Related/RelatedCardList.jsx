const React = require("react");
const CardItem = require("./Card.jsx");
const { GridList } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  }
});

module.exports = function RelatedCardList(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <GridList>
      <CardItem product={props.data.product} styles={props.data.styles} />
      <CardItem product={props.data.product} styles={props.data.styles} />
      <CardItem product={props.data.product} styles={props.data.styles} />
      <CardItem product={props.data.product} styles={props.data.styles} />
      <CardItem product={props.data.product} styles={props.data.styles} />
      <CardItem product={props.data.product} styles={props.data.styles} />
    </GridList>
  );
};
