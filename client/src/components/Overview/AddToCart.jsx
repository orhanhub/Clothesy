const React = require("react");
const { makeStyles } = require("@material-ui/core/styles");
const { Button } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: "200px"
  }
}));

const AddToCart = () => {
  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.button}>
      ADD TO BAG
    </Button>
  );
};

module.exports = AddToCart;
