const React = require("react");
const { useState, useEffect } = require("react");
const { makeStyles } = require("@material-ui/core");
const { Typography, Grid, Link } = require("@material-ui/core");
const axios = require("../../../../helpers/axiosApi");
const ShowMore = require("../shared/ShowMoreButton");
const SingleABottom = require("./singleabottom");
const staticdata = require("./staticdata");

const useStyles = makeStyles(theme => ({
  answers: {
    noWrap: true
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
          <Grid key={i.answer_id} item xs={11}>
            <Typography className={classes.answers}>{i.body}</Typography>
            <SingleABottom
              answerid={i.answer_id}
              date={i.date}
              answerername={i.answerer_name}
            />
          </Grid>
        );
      })}
      <ShowMore
        buttonText={"LOAD MORE ANSWERS"}
        onClick={() => {
          setAnswerCount(answercount + 1);
        }}
      />
    </Grid>
  );
};
