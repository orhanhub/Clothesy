const React = require("react");
const { makeStyles } = require("@material-ui/core");
const { Typography, Grid, Link } = require("@material-ui/core");
const { SingleA } = require("./singlea.jsx");

//TODO: add the link format
//styling section
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

//component
module.exports.Singleq = ({ questions }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {questions.map(i => {
        return (
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Typography className={classes.boldFont}>Q:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.boldFont}>
                {i.question_body}
              </Typography>
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
                  Add Answer(Link)
                </Link>
              </Typography>
            </Grid>
            <SingleA questionid={i.question_id} />
          </Grid>
        );
      })}
    </div>
  );
};
