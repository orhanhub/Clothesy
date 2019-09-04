const React = require("react");
const { Paper, Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const MarkerBar = require("../shared/MarkerBar.jsx");

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

module.exports = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography>Hello, revieworld.</Typography>
      <MarkerBar percentage={25} />
    </Paper>
  );
};
