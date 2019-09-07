const React = require("react");
const { useState, useEffect } = require("react");
const staticdata = require("./staticdata");
const { makeStyles } = require("@material-ui/core");
const { Typography, Grid, Link } = require("@material-ui/core");
const axios = require("../../../../helpers/axiosApi");

//TODO: add the link format
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
    padding: 10
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
  return (
    axios
      // .request(`/qa/1/answers`)
      .request(`/qa/${qid}/answers`)
  );
};

module.exports.SingleA = ({ questionid }) => {
  const classes = useStyles();
  const [apiDatas, setData] = useState({ results: [] });

  useEffect(() => {
    handleGetAnswers(questionid).then(({ data }) => setData(data));
  }, [1]);

  return (
    <ul>
      {apiDatas.results.map(i => {
        return <li>{i.body}</li>;
      })}
    </ul>
  );
};

// simple solution
//   return (
//     <div>
//       <p
//         onLoad={() => {
//           setData(apiDatas);
//         }}
//       >
//         {console.log(apiDatas)}
//       </p>
//     </div>
//   );
/* <div className={classes.root}>
      {apiDatas.results.map(i => (
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Typography className={classes.boldFont}>A:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>{i.body}</Typography>
          </Grid>
        </Grid>
      ))}
    </div> */
