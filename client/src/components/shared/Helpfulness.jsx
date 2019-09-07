const React = require("react");
const { Typography, Grid } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  smallGreyFont: {
    fontWeight: "fontWeightLight",
    fontSize: 10
  },
  smallGreyFontRightAlign: {
    textAlign: "right",
    fontWeight: "fontWeightLight",
    fontSize: 10
  }
}));

//How does the Helpfulness Work?
//this module accepts 2 inputs, helpfulness counter and onClick behaviour
//onClick behaviour coming from the parent component as a prop can change
//the helpfulnessCounter; which is rendered on the DOM

module.exports = ({ helpfulnessCounter, onClick }) => {
  const classes = useStyles();

  // primitive structure of this component:
  // return <p onClick={onClick}>{helpfulnessCounter}</p>;

  // Material-UI based rendering:
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Typography className={classes.smallGreyFontRightAlign}>
            Helpful?
          </Typography>
        </Grid>
        <Grid item xs={2} onClick={onClick}>
          <Typography className={classes.smallGreyFont}>
            Yes({helpfulnessCounter})
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
