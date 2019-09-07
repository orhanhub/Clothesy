const React = require("react");
const { useState } = require("react");

// TODO: // implement api endpoints
// TODO: // implement material-ui typography et al.

module.exports = () => {
  const [isReported, setReport] = useState(0);
  return (
    <p onClick={() => setReport(isReported + 1)}>
      {isReported === 0 ? "Report" : "Reported"}
    </p>
  );
};
