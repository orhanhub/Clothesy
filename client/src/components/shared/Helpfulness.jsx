const React = require("react");
const { Typography, Grid } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core");
const axios = require("../../../../helpers/axiosApi.js");

const useStyles = makeStyles(theme => ({
  smallGreyFont: {
    fontWeight: "fontWeightLight",
    fontSize: 10
  },
  smallGreyFontRightAlign: {
    textAlign: "right",
    fontWeight: "fontWeightLight",
    fontSize: 10
  }
}));

const markAsHelpful = {
  question: id => axios.put(`/qa/question/${id}/helpful`),
  answer: id => axios.put(`/qa/answer/${id}/helpful`),
  review: id => axios.put(`/reviews/helpful/${id}`)
};

//ENDPOINTS -- expect 204
//PUT /qa/question/:question_id/helpful
//PUT /qa/answer/:answer_id/helpful
//PUT /reviews/helpful/:review_id

module.exports = ({
  helpfulnessCounter,
  onSuccess = () => {},
  onFail = () => {},
  qar,
  qarId
}) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography className={classes.smallGreyFontRightAlign}>
            Helpful?
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          onClick={() => {
            markAsHelpful[qar](qarId)
              .then(() => onSuccess())
              .catch(() => onFail());
          }}
        >
          <Typography className={classes.smallGreyFont}>
            Yes({helpfulnessCounter})
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
