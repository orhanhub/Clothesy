const React = require("react");
const { Provider } = require("react-redux");
const store = require("../../store");
const OmniContainer = require("./containers/OmniContainer.jsx");

let App = () => {
  return (
    <Provider store={store}>
      <OmniContainer>Hello, world.</OmniContainer>
    </Provider>
  );
};

module.exports = App;
