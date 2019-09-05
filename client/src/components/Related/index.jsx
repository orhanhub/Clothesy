const React = require("react");
const RelatedCardList = require("./RelatedCardList.jsx");
const data = require("./sampleData.js");

// module.exports = props => <div>Hello, related world.</div>;
class Related extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ fontSize: "10pt", textTransform: "uppercase" }}>
        Related Products
        <RelatedCardList data={data} />
        Your Outfit
        <RelatedCardList data={data} />
      </div>
    );
  }
}

module.exports = Related;
