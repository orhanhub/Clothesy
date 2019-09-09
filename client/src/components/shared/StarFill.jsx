const React = require("react");
const starsToPct = require("./helpers/starsToPct.js");

module.exports = ({ stars, percent, onClick }) => {
  let percentage = percent || starsToPct(stars);
  return (
    <div onClick={onClick || (() => {})} className="stars">
      <div className="empty-stars">☆☆☆☆☆</div>
      <div className="full-stars" style={{ width: `${percentage}%` }}>
        ★★★★★
      </div>
    </div>
  );
};
