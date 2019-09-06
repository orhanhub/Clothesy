const React = require("react");
const { useState } = require("react");
const { Container, Typography } = require("@material-ui/core");

//import the modules used under the questions and answers widget

//QnaOneWrap is the questions and answers part
//SearchQna searches the answers, not the questions
//AddQuestion is add a question button
//Showmore expands the answers

const { QnaOneWrap } = require("./singleqna");
const { SearchQnaButton } = require("./searchqnabutton");
const { AddQuestion } = require("./modaladdquestion");
const { ShowMore } = require("./buttonshowmore");

const staticdata = require("./staticdata");
const { Singleq } = require("./singleq");

module.exports = props => {
  //TODO: fix naming here
  let apiData = staticdata.static.listquestions.results;
  const [apiDatas, setData] = useState(apiData);

  return (
    <div className="qnaComponentWrapper">
      <div>
        <Typography>QUESTIONS & ANSWERS</Typography>
      </div>
      <Container maxWidth="lg">
        <SearchQnaButton />
        <div className="qnaListWrapper">
          <QnaOneWrap />
          <QnaOneWrap />
          <QnaOneWrap />
        </div>

        <div>
          <Singleq questions={apiDatas} />
        </div>
        <div>
          <AddQuestion />
          <ShowMore />
        </div>
      </Container>
    </div>
  );
};
