const React = require("react");

module.exports = ({ percentage }) => {
  return (
    <div className="stars">
      <div className="empty-stars">☆☆☆☆☆</div>
      <div className="full-stars" style={{ width: `${percentage}%` }}>
        ★★★★★
      </div>
    </div>
  );
};
