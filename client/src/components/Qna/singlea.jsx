const React = require("react");
const { useState, useEffect } = require("react");
const { makeStyles } = require("@material-ui/core");
const { Typography, Grid, Link } = require("@material-ui/core");
const axios = require("../../../../helpers/axiosApi");
const ShowMore = require("../shared/ShowMoreButton");
const SingleABottom = require("./singleabottom");
const staticdata = require("./staticdata");
//TODO: add the link format
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
    padding: 10
  },
  answers: {
    noWrap: true
  },
  boldFont: {
    fontWeight: "bold"
  },
  smallGreyFont: {
    fontWeight: "fontWeightLight",
    fontSize: 10
  },
  smallGreyFontRightAlign: {
    textAlign: "right",
    fontWeight: "fontWeightLight",
    fontSize: 10
  },
  link: {
    margin: "",
    color: "inherit",
    variant: "body2"
  }
}));

const handleGetAnswers = qid => {
  return axios.request(`/qa/${qid}/answers`);
};

module.exports = ({ questionid }) => {
  const classes = useStyles();
  const [apiDatas, setData] = useState({ results: [] });
  const [answercount, setAnswerCount] = useState(1);

  useEffect(() => {
    handleGetAnswers(questionid).then(({ data }) => setData(data));
  }, [1]);

  return (
    <Grid container spacing={1} direction={"column"}>
      {apiDatas.results.slice(0, answercount).map(i => {
        return (
          <Grid key={i.id} item xs={11}>
            <Typography className={classes.answers}>{i.body}</Typography>
            <SingleABottom />
          </Grid>
        );
      })}
      <ShowMore
        onClick={() => {
          setAnswerCount(answercount + 1);
        }}
      />
    </Grid>
  );
};
