const { connect } = require("react-redux");
const Related = require("../components/Related/index.jsx");

module.exports = connect(({ relatedProducts }) => ({ relatedProducts }))(
  Related
);
