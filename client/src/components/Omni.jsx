const React = require("react");
const { useEffect } = require("react");
const { Container } = require("@material-ui/core");
const Overview = require("../containers/OverviewContainer.js");
const Qna = require("../containers/QnaContainer.js");
const Related = require("../containers/RelatedContainer.js");
const Reviews = require("../containers/ReviewsContainer.js");

module.exports = props => {
  // console.log(JSON.stringify(props));
  // useEffect(() => {
  //   console.log("useEffect props", JSON.stringify(props));
  //   console.log("props.match", props.match);
  //   props.changeCurrentProduct(Number(props.match.params.id));
  // }, [props.match.params.id]);
  // useEffect(() => {
  //   props.changeCurrentProduct(1);
  // }, []);

  return (
    <div className={"level1"}>
      <Container className={"level2"}>
        <Overview />
        <Qna />
        <Related history={props.history} />
        <Reviews />
      </Container>
    </div>
  );
};

//  get mouse position on page; console logs for now
// to get exact top right position; need to get the x page width and divide the e.pageX to pageWidth
//     <div className={"level1"} onMouseMove={e => console.log(e.pageX, e.pageY)}>

/*

      onMouseMove={e =>
        console.log(
          e.pageX,
          e.pageY,
          window.innerWidth,
          window.innerHeight,
          new Date()
        )
      }
      */
