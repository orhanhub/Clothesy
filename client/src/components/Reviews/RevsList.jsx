const React = require("react");
const { useState, useEffect } = require("react");
const { Grid, Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const RevsListItem = require("./RevsListItem.jsx");
const AddReview = require("./AddReview.jsx");
const SortReviewSelect = require("./SortReviewSelect.jsx");
const ShowMoreReviews = require("./ShowMoreButton.jsx");

module.exports = ({
  reviews,
  changeSortBy,
  sortingBy,
  increaseDisplayCount
}) => {
  return (
    <Grid item xs={9}>
      <SortReviewSelect changeSortBy={changeSortBy} sortingBy={sortingBy} />
      <Grid container>
        {reviews.map(review => (
          <RevsListItem key={review.review_id} review={review} />
        ))}
      </Grid>
      <Grid container>
        <AddReview />
        <ShowMoreReviews onClick={increaseDisplayCount} />
      </Grid>
    </Grid>
  );
};
