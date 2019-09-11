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
    <div>
      <Container>
        <Overview />
        <Qna />
        <Related />
        <Reviews />
      </Container>
    </div>
  );
};
