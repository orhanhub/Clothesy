const React = require("react");
const { useState } = require("react");
const { makeStyles } = require("@material-ui/core");
const { Typography, Grid, Link } = require("@material-ui/core");
const SingleA = require("./singlea.jsx");
const Helpfulness = require("../shared/Helpfulness");
const AddAnswer = require("../shared/Modal");
//TODO: add the link format
//styling section
const useStyles = makeStyles(theme => ({
  singleqaroot: {
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
module.exports = ({ questions }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.singleqaroot}>
      {questions.map(i => {
        return (
          <Grid container spacing={1} key={i.question_id}>
            <Grid item xs={1}>
              <Typography className={classes.boldFont}>Q:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.boldFont}>
                {i.question_body}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Helpfulness helpfulnessCounter={0} />
            </Grid>
            <Grid item xs={1}>
              <AddAnswer qarfield={"answer"} />
            </Grid>
            <Grid item xs={1}>
              <Typography className={classes.boldFont}>A: </Typography>
            </Grid>
            <Grid item xs={11}>
              <SingleA questionid={i.question_id} />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

/*       <div id="afterq">
        <SingleA questionid={question_id} answerlimit={answercount} />

      </div>
*/
