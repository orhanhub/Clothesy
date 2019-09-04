const React = require("react");
const { makeStyles } = require("@material-ui/core");
const { Typography, Grid } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "left"
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
  }
}));

module.exports.QnaOneWrap = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Typography className={classes.boldFont}>Q:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className={classes.boldFont}>
            Who what which when where why whether how?
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.smallGreyFontRightAlign}>
            Helpful?
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.smallGreyFont}>Yes(#)</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.smallGreyFont}>
            Add Answer(Link)
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Typography className={classes.boldFont}>A:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            ipsam magnam. Porro sequi voluptatibus laudantium aliquam saepe
            fugit blanditiis recusandae! Rem at tempora, eos explicabo dicta et
            id iure fugit.
          </Typography>
        </Grid>
      </Grid>

      <div className={classes.smallGreyFont}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Typography className={classes.smallGreyFont}>
              by #UserID,
            </Typography>
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
            <Typography className={classes.smallGreyFont}>Yes(#)</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography className={classes.smallGreyFont}>
              Report(Link)
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
