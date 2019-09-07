const React = require("react");
const RelatedCardList = require("./RelatedCardList.jsx");
const data = require("./sampleData.js");
const OutfitList = require("./OutfitList.jsx");
const { Typography } = require("@material-ui/core");

// module.exports = props => <div>Hello, related world.</div>;
class Related extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Typography style={{ fontSize: "10pt", textTransform: "uppercase" }}>
          Related Products
        </Typography>
        <RelatedCardList related={this.props.relatedProducts} />
        <Typography style={{ fontSize: "10pt", textTransform: "uppercase" }}>
          Your Outfit
        </Typography>
        <OutfitList productId={this.props.product} data={data} />
      </div>
    );
  }
}

module.exports = Related;
