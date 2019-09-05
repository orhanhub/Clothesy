const React = require("react");
const { useState, useEffect } = require("react");
const { Grid, Typography, Box } = require("@material-ui/core");
//const { makeStyles } = require("@material-ui/core/styles");
const RevTitle = require("./RevTitle.jsx");
const RevBody = require("./RevBody.jsx");

module.exports = ({ review }) => {
  return (
    <Grid item xs={12}>
      <RevTitle>{review.summary}</RevTitle>
      <RevBody>{review.body}</RevBody>
    </Grid>
  );
};
