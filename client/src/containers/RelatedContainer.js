const { connect } = require("react-redux");
const Related = require("../components/Related/index.jsx");
const { changeCurrentProduct } = require("../../../store/action-creators");

module.exports = connect(
  ({ relatedProducts, currentProduct }) => ({
    relatedProducts,
    currentProduct
  }),
  dispatch => id => dispatch(changeCurrentProduct(id))
)(Related);
