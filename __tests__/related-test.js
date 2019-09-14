const React = require("react");
const Enzyme = require("enzyme");
const { shallow } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const Related = require("../client/src/components/Related/index");

describe("Related component renders", () => {
  test("Related widget displays on page", () => {
    let wrapper = shallow(
      <Related currentProduct={{ id: 5 }} changeRelatedProducts={() => {}} />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
