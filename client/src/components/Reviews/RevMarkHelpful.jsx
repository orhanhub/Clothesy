const React = require("react");
const MarkHelpful = require("../shared/Helpfulness.jsx");

module.exports = ({ review }) => (
  <MarkHelpful
    onClick={() => console.log("helpful")}
    helpfulnessCounter={review.helpfulness}
  />
);
