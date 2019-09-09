const React = require("react");
const { useState } = require("react");
const { Container, Typography } = require("@material-ui/core");

//import the modules used under the questions and answers widget

//QnaOneWrap is the questions and answers part
//SearchQna searches the answers, not the questions
//AddQuestion is add a question button
//Showmore expands the answers

const { SearchQnaButton } = require("./searchqnabutton");
const { Singleq } = require("./singleq");
const AddQuestion = require("../shared/Modal");
const ShowMore = require("../shared/ShowMoreButton");

const staticdata = require("./staticdata");

module.exports = props => {
  //TODO: fix naming here
  let apiData = staticdata.static.listquestions.results;
  const [apiDatas, setData] = useState(apiData);
  const [count, setCount] = useState(2);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="qnaComponentWrapper">
      <div>
        <Typography>QUESTIONS & ANSWERS</Typography>
      </div>
      <Container maxWidth="lg">
        <SearchQnaButton
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
        />
        <div className="qnaListWrapper"></div>
        <div>
          <Singleq questions={apiDatas.slice(0, count)} />
        </div>
        <div>
          <AddQuestion
            qarfield={"answer"}
            bodyTextPlaceholder={"submit your answer"}
          ></AddQuestion>
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

/* Helpfulness component scaffold: 
//module exports:
const TempHelpful = require("../shared/Helpfulness");
const [helpfulcount, setHelpfulCount] = useState(0);

//return( ... DOM location)

      <TempHelpful
        helpfulnessCounter={helpfulcount}
        onClick={() => setHelpfulCount(helpfulcount + 1)}
      />

*/
