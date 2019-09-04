const { connect } = require("react-redux");
const Omni = require("../components/Omni.jsx");

module.exports = connect(state => state)(Omni);
