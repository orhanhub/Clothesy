const { connect } = require("react-redux");
const Related = require("../components/Related/index.jsx");
const {
  changeCurrentProduct,
  changeRelatedProducts,
  changeReviews,
  changeReviewsMeta,
  changeProductStyles
} = require("../../../store/action-creators");

const mapDispatchToProps = dispatch => ({
  changeCurrentProduct: id => {
    dispatch(changeCurrentProduct(id));
    dispatch(changeRelatedProducts(id));
    dispatch(changeReviews(id));
    dispatch(changeReviewsMeta(id));
    dispatch(changeProductStyles(id));
  }
});
module.exports = connect(
  ({ relatedProducts, currentProduct }) => ({
    relatedProducts,
    currentProduct
  }),
  mapDispatchToProps
)(Related);
