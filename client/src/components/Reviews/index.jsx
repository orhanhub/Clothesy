const React = require("react");
const axios = require("../../../../helpers/axiosApi.js");
const { useState, useEffect } = require("react");
const { Paper, Typography, Grid } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const MarkerBar = require("../shared/MarkerBar.jsx");
const StarFill = require("../shared/StarFill.jsx");
const Ratings = require("./Ratings.jsx");
const RevsList = require("./RevsList.jsx");

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

module.exports = props => {
  const classes = useStyles();
  axios
    .request(`/reviews/${props.currentProduct.id}/meta`)
    .then(({ data }) => console.log('reviews axios fired'))
    .catch(console.error);

  return (
    <Paper className={classes.root}>
      <Typography>{"RATINGS & REVIEWS"}</Typography>
      <Grid container spacing={2}>
        <Ratings />
        <RevsList />
      </Grid>
      {/* <MarkerBar percentage={25} />
      <StarFill percentage={67.5} /> */}
    </Paper>
  );
};
