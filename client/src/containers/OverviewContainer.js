const { connect } = require("react-redux");
const Overview = require("../components/Overview/index.jsx");

module.exports = connect(({ reviewsMeta, currentProduct }) => ({
  reviewsMeta,
  currentProduct
}))(Overview);
