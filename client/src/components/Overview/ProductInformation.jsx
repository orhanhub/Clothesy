const React = require("react");
const StarFill = require("../shared/StarFill.jsx");

const ProductInformation = ({ initialProduct }) => {
  const style = {
    marginTop: "50px"
  };
  return (
    <div>
      <div style={style}>
        <div style={{ display: "flex" }}>
          {initialProduct.reviewsMeta.avgRating ? (
            <StarFill stars={initialProduct.reviewsMeta.avgRating} />
          ) : null}
          <a
            href="#"
            style={{
              paddingTop: "1px",
              paddingRight: "190px",
              fontSize: "11px",
              color: "dimgrey"
            }}
          >
            <u>Reviews</u>
          </a>
        </div>

        <div>{initialProduct.currentProduct.category}</div>
        <h1>{initialProduct.currentProduct.name}</h1>
        <div>${initialProduct.currentProduct.default_price}</div>
      </div>
    </div>
  );
};

module.exports = ProductInformation;
