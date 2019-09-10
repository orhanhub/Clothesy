const React = require("react");
const { Typography, Grid, Link } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
    padding: 10
  },
  boldFont: {
    fontWeight: "bold"
  },
  smallGreyFont: {
    fontWeight: "fontWeightLight",
    fontSize: 10
  },
  smallGreyFontRightAlign: {
    textAlign: "right",
    fontWeight: "fontWeightLight",
    fontSize: 10
  },
  link: {
    margin: "",
    color: "inherit",
    variant: "body2"
  }
}));

module.exports = () => {
  const classes = useStyles();

  return (
    <div className={classes.smallGreyFont}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Typography className={classes.smallGreyFont}>by #UserID,</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.smallGreyFont}>#Date</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.smallGreyFontRightAlign}>
            Helpful?
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.smallGreyFont}>
            <Link href="" className={classes.link}>
              Yes(#)
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.smallGreyFont}>
            <Link href="" className={classes.link}>
              Report(Link)
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
