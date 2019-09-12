const React = require("react");
const { useState, useEffect } = require("react");
const { Paper, Typography, Grid } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const MarkerBar = require("../../client/src/components/shared/MarkerBar.jsx");
const StarFill = require("../../client/src/components/shared/StarFill.jsx");
const Ratings = require("../../client/src/components/Reviews/Ratings.jsx");
const RevsList = require("../../client/src/components/Reviews/RevsList.jsx");
const sortReviews = require("../../client/src/components/Reviews/helpers/sortReviews.js");

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

let Reviews = ({
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
    <Grid item xs={12}>
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
              ? setDisplayCount(displayCount + 2)
              : null;
          }}
          showShowMore={
            sortedReviews.length && displayCount < sortedReviews.length
          }
          currentProduct={currentProduct}
          submitNewReview={() => {
            console.log("changing");
            changeReviews(currentProduct.id);
            changeReviewsMeta(currentProduct.id);
          }}
        />
      </Grid>
      {/* <MarkerBar percentage={25} />
      <StarFill percentage={67.5} /> */}
    </Grid>
  );
};

module.exports = props => <Reviews {...props} />;
