const React = require("react");
const { useState, useEffect } = require("react");
const {
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio
} = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const AddReviewModal = require("../shared/Modal.jsx");
const QualityRadioSelect = require("./QualityRadioSelect.jsx");
const OverallRatingSelect = require("./OverallRatingSelect.jsx");
const characteristics = require("./constants/characteristics.js");

module.exports = props => {
  return (
    <Grid container spacing={2}>
      <AddReviewModal qarfield={"review"} bodyTextPlaceholder={"Review Body"}>
        <OverallRatingSelect />
        {Object.entries(characteristics).map(([char, ratings]) => (
          <QualityRadioSelect
            characteristic={{ name: char, levels: ratings }}
          />
        ))}
      </AddReviewModal>
    </Grid>
  );
};
