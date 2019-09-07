const React = require("react");
const { useState, useEffect } = require("react");
const { Grid, Typography, Box } = require("@material-ui/core");
//const { makeStyles } = require("@material-ui/core/styles");
const RevTitle = require("./RevTitle.jsx");
const RevBody = require("./RevBody.jsx");
const RevRecomm = require("./RevRecomm.jsx");
// const RevStars = require("./RevStars.jsx")
const RevStarsAndDetails = require("./RevStarsAndDetails.jsx");
const RevHelpfulOrReport = require("./RevHelpfulOrReport.jsx");

module.exports = ({ review }) => {
  return (
    <Grid item xs={12}>
      <RevStarsAndDetails review={review} />
      <RevTitle>{review.summary}</RevTitle>
      <RevBody>{review.body}</RevBody>
      <RevRecomm recommended={Boolean(review.recommend)} />
      <RevHelpfulOrReport review={review} />
    </Grid>
  );
};
