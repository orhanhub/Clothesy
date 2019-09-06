const React = require("react");
const { useState } = require("react");
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

module.exports.SingleA = ({ questionid }) => {
  const classes = useStyles();

  const handleGetAnswers = qid => {
    return (
      axios
        // .request(`/qa/1/answers`)
        .request(`/qa/${qid}/answers`)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(console.error)
    );
  };

  //   let apiData = staticdata.static.listanswers.results;
  const apiData = handleGetAnswers(questionid);
  const [apiDatas, setData] = useState(apiData);

  return (
    <div>{console.log("fired")}</div>

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

/* <div className={classes.root} onLoad={() => setData(apiData)}>
      {apiDatas.map(i => (
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
