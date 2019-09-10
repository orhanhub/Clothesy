const React = require("react");
const { useState, useEffect } = require("react");
const {
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const AddReviewModal = require("../shared/Modal.jsx");
const QualityRadioSelect = require("./QualityRadioSelect.jsx");
const OverallRatingSelect = require("./OverallRatingSelect.jsx");
const UploadThumbnails = require("./UploadThumbnails.jsx");
const characteristics = require("./constants/characteristics.js");
const fileUpload = require("../shared/fileUpload.js");

module.exports = props => {
  let [thumbnails, setThumbnails] = useState([]);
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
        <Grid container>
          <UploadThumbnails thumbnails={thumbnails} />
          <Button
            onClick={() => fileUpload(setThumbnails, 5 - thumbnails.length)}
          >
            Upload
          </Button>
        </Grid>
      </AddReviewModal>
    </Grid>
  );
};
