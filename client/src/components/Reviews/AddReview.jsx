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
    <Grid item xs={12}>
      <AddReviewModal
        qarfield={"review"}
        modalTitle={"Write Your Review"}
        bodyTextPlaceholder={"Review Body"}
        buttonText={`ADD A REVIEW +`}
      >
        <OverallRatingSelect />
        {Object.entries(characteristics).map(([char, ratings]) => (
          <QualityRadioSelect
            key={"add-review-radio" + char}
            characteristic={{ name: char, levels: ratings }}
          />
        ))}
      </AddReviewModal>
    </Grid>
  );
};
