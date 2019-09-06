//THIS USES REACT HOOKS TO GET STATIC DATA AND RENDER
const staticdata = require("./staticdata");

const React = require("react");
const { useState } = require("react");

module.exports.TestComp = props => {
  let apiData = staticdata.static.listquestions.results;

  // const [questions, setQuestions] = useState(apiData);

  // return <div>{console.log(apiData)}</div>;

  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);
  const [apiDatas, setData] = useState(apiData);

  return (
    <div>
      {/* <p>You clicked {count} times</p> */}
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
      <ul>
        {apiDatas.map(i => {
          return <li>{i.question_body}</li>;
        })}
      </ul>
    </div>
  );
};

//FIXME: remove my dependencies:
//this module is exported to index.jsx under qna
