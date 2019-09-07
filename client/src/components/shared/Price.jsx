const React = require("react");
const { Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

// this component takes two props: salePrice and originalPrice
// it will return either originalPrice or
// the sale price in red with original price struckthrough

const useStyles = makeStyles({
  regularPrice: {
    color: "black"
  },
  struckthroughPrice: {
    color: "black",
    textDecoration: "line-through",
    display: "inline-block"
  },
  salePrice: {
    color: "red",
    display: "inline-block"
  }
});

module.exports = function Price(props) {
  const classes = useStyles();
  if (props.salePrice === undefined || props.salePrice === "0") {
    return <Typography>${props.originalPrice}</Typography>;
  } else {
    return (
      <div>
        <div className={classes.struckthroughPrice}>${props.originalPrice}</div>
        <div className={classes.salePrice}>${props.salePrice}</div>
      </div>
    );
  }
};
