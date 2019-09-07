const React = require("react");
const { Box, Grid, Typography } = require("@material-ui/core");
const MarkerBar = require("../shared/MarkerBar.jsx");

module.exports = ({ characteristics }) => {
  return (
    <div>
      {Object.entries(characteristics || {}).map(([char, rating]) => (
        <Grid key={"marker-bar-" + char} container>
          <Grid item xs={12}>
            {char}
          </Grid>
          <Grid item xs={12}>
            <MarkerBar percentage={100 * (rating.value / 5)} />
          </Grid>
        </Grid>
      ))}
    </div>
  );
};
