const React = require("react");
const Report = require("../shared/Report.jsx");

module.exports = ({ review }) => (
  <Report
    onClick={() => console.log("report")}
    helpfulnessCounter={review.helpfulness}
  />
);
