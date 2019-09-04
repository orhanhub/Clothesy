const React = require("react");
const MainImage = require("./MainImage.jsx");
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: ""
    };
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    this.getStyles(1);
  }

  getStyles(productId) {
    axios
      .get(`http://18.217.220.129/products/${productId}/styles`)
      .then(response => {
        this.setState({
          mainImg: response.data.results[0].photos[0].thumbnail_url
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <MainImage mainImg={this.state.mainImg} />
      </div>
    );
  }
}

module.exports = App;
