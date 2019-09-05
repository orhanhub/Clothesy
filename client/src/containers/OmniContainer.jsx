const { connect } = require("react-redux");
const {
  changeCurrentProduct,
  changeRelatedProducts,
  changeReviews,
  changeReviewsMeta
} = require("../../../store/action-creators");
const Omni = require("../components/Omni.jsx");

const mapDispatchToProps = dispatch => ({
  changeCurrentProduct: id => {
    dispatch(changeCurrentProduct(id));
    dispatch(changeRelatedProducts(id));
    dispatch(changeReviews(id));
    dispatch(changeReviewsMeta(id));
  }
});
module.exports = connect(
  state => state,
  mapDispatchToProps
)(Omni);
