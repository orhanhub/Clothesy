const { connect } = require("react-redux");
const Reviews = require("../components/Reviews/index.jsx");

module.exports = connect(({ reviewsMeta, reviews, currentProduct }) => ({
  reviewsMeta,
  reviews,
  currentProduct
}))(Reviews);
