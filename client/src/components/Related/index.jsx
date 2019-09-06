const React = require("react");
const RelatedCardList = require("./RelatedCardList.jsx");
const data = require("./sampleData.js");
const OutfitList = require("./OutfitList.jsx");

// module.exports = props => <div>Hello, related world.</div>;
class Related extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{ fontSize: "10pt", textTransform: "uppercase" }}>
          Related Products
        </div>
        <RelatedCardList data={data} />
        Your Outfit
        <OutfitList data={data} />
      </div>
    );
  }
}

module.exports = Related;
