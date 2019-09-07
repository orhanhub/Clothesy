const React = require("react");
const { Box, Grid, Typography } = require("@material-ui/core");
const ProgressBar = require("./ProgressBar.jsx");

module.exports = ({ ratingRelFreq }) => {
  return (
    <div>
      {Object.entries(ratingRelFreq || {}).map(([rating, freq]) => (
        <Grid key={"progress-bar-" + rating} container>
          <Grid item xs={3}>
            {rating} stars
          </Grid>
          <Grid item xs={8}>
            <ProgressBar percentage={100 * freq} />
          </Grid>
        </Grid>
      ))}
    </div>
  );
};
