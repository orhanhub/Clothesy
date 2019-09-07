const React = require("react");

const { Grid, Typography, Box } = require("@material-ui/core");

const StarFill = require("../shared/StarFill.jsx");

module.exports = ({ review }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <StarFill stars={review.rating} />
      </Grid>
      <Grid item xs={6}>
        <Box align="right">{review.reviewer_name}</Box>
      </Grid>
    </Grid>
  );
};
