const { mount } = require("enzyme");
const React = require("react");

const App = require("../client/src/App.jsx");
const Omni = require("../client/src/components/Omni.jsx");

test("all store properties are accessible to app", () => {
  let wrapper = mount(<App />);
  expect(Object.keys(wrapper.find(Omni).props())).toContain("prop1");
});
