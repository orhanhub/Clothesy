const React = require("react");
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
  const [starFilter, setStarFilter] = useState({});
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography>{"RATINGS & REVIEWS"}</Typography>
      <Grid container spacing={2}>
        <Ratings
          reviewsMeta={props.reviewsMeta}
          setStarFilter={rating => {
            let currFilters = { ...starFilter };
            if (currFilters[rating]) {
              delete currFilters[rating];
            } else {
              currFilters[rating] = true;
            }
            setStarFilter(currFilters);
          }}
          resetStarFilter={() => setStarFilter({})}
          currFilters={Object.keys(starFilter)}
        />
        <RevsList
          reviews={props.reviews.filter(
            review =>
              !Object.keys(starFilter).length || starFilter[review.rating]
          )}
        />
      </Grid>
      {/* <MarkerBar percentage={25} />
      <StarFill percentage={67.5} /> */}
    </Paper>
  );
};
