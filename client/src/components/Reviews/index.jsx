const React = require("react");
const { useState, useEffect } = require("react");
const { Paper, Typography, Grid } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const MarkerBar = require("../shared/MarkerBar.jsx");
const StarFill = require("../shared/StarFill.jsx");
const Ratings = require("./Ratings.jsx");
const RevsList = require("./RevsList.jsx");
const sortReviews = require("./helpers/sortReviews.js");

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

module.exports = ({
  reviews,
  reviewsMeta,
  currentProduct,
  changeReviewsMeta,
  changeReviews
}) => {
  useEffect(() => {
    changeReviewsMeta(currentProduct.id);
    changeReviews(currentProduct.id);
  }, [currentProduct.id]);
  const [starFilter, setStarFilter] = useState({});
  const [sortingBy, setSorting] = useState("relevance");
  const [displayCount, setDisplayCount] = useState(2);
  const classes = useStyles();

  let sortedReviews = sortReviews(reviews)[sortingBy].filter(
    review => !Object.keys(starFilter).length || starFilter[review.rating]
  );

  return (
    <Paper className={classes.root}>
      <Typography>{"RATINGS & REVIEWS"}</Typography>
      <Grid container spacing={2}>
        <Ratings
          reviewsMeta={reviewsMeta}
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
          reviews={sortedReviews.slice(0, displayCount)}
          reviewsMeta={reviewsMeta}
          // sortedReviews={sortReviews(reviews)[sortingBy]}
          changeSortBy={setSorting}
          sortingBy={sortingBy}
          increaseDisplayCount={() => {
            displayCount < sortedReviews.length
              ? setDisplayCount(displayCount + 1)
              : null;
          }}
          showShowMore={
            sortedReviews.length && displayCount < sortedReviews.length
          }
          currentProduct={currentProduct}
        />
      </Grid>
      {/* <MarkerBar percentage={25} />
      <StarFill percentage={67.5} /> */}
    </Paper>
  );
};
