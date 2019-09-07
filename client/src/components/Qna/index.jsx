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
const ShowMore = require("../shared/ShowMoreButton");

const staticdata = require("./staticdata");
const { Singleq } = require("./singleq");
const TempReport = require("../shared/Report");

/* Helpfulness component scaffold: */

//module exports:

module.exports = props => {
  //TODO: fix naming here
  let apiData = staticdata.static.listquestions.results;
  const [apiDatas, setData] = useState(apiData);
  const [count, setCount] = useState(1);
  
// helpfulness items
  const TempHelpful = require("../shared/Helpfulness");
  const [helpfulcount, setHelpfulCount] = useState(0);
//end of helpfulness
  return (
    <div className="qnaComponentWrapper">
      <div>
        <Typography>QUESTIONS & ANSWERS</Typography>
      </div>
      <TempReport />

      <TempHelpful
        helpfulnessCounter={helpfulcount}
        onClick={() => setHelpfulCount(helpfulcount + 1)}
      />

      <Container maxWidth="lg">
        <SearchQnaButton />
        <div className="qnaListWrapper">
          <QnaOneWrap />
          <QnaOneWrap />
          <QnaOneWrap />
        </div>
        <div>
          <Singleq questions={apiDatas.slice(0, count)} />
        </div>
        <div>
          <AddQuestion />
          <ShowMore
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </div>
      </Container>
    </div>
  );
};
