const React = require("react");
const { Box, Grid, Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const AvgRatingAndStar = require("./AvgRatingAndStar.jsx");
const RatingHistogram = require("./RatingHistogram.jsx");
const QualityRatings = require("./QualityRatings.jsx");

module.exports = ({ reviewsMeta }) => {
  return (
    <Grid item xs={3}>
      <AvgRatingAndStar avgRating={reviewsMeta.avgRating} />
      <RatingHistogram ratingRelFreq={reviewsMeta.ratingRelFreq} />
      <p></p>
      <QualityRatings characteristics={reviewsMeta.characteristics} />
    </Grid>
  );
};
