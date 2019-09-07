const React = require("react");

module.exports = ({ recommended }) => {
  return <div>{recommended ? "Recommended" : ""}</div>;
};
