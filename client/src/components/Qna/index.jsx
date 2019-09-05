const React = require("react");
const { Container, Typography, Grid, Paper } = require("@material-ui/core");
const { QnaOneWrap } = require("./singleqna.jsx");
const { SearchQnaButton } = require("./searchqnabutton.jsx");

module.exports = props => {
  return (
    <div className="qnaComponentWrapper">
      <Container maxWidth="lg">
        <div>Search Bar</div>
        <SearchQnaButton />
        <div>end</div>
        <div className="qnaListWrapper">
          <QnaOneWrap />
          <QnaOneWrap />
          <QnaOneWrap />
        </div>
        <button>More Answered Questions</button>
        <button>Add a Question +</button>
      </Container>
    </div>
  );
};
