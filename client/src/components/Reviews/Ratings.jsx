const React = require("react");
const { Grid, Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

module.exports = props => {
  return (
    <Grid item xs={3}>
      <Typography>Ratings</Typography>
    </Grid>
  );
};
