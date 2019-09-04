const React = require("react");
const { makeStyles } = require("@material-ui/core");
const { Container, Typography, Grid, Paper } = require("@material-ui/core");
const { QnaOneWrap } = require("./singleqna.jsx");

module.exports = props => {
  return (
    <div className="qnaComponentWrapper">
      <Container maxWidth="lg">
        <div>Search Bar</div>
        <div className="qnaListWrapper">
          <QnaOneWrap />
        </div>
        <button>More Answered Questions</button>
        <button>Add a Question +</button>
      </Container>
    </div>
  );
};
