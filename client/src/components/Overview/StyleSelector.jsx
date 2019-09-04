const React = require("react");

const StyleSelector = () => {
  return (
    <div>
      <div>Style > Selected Style</div>
      <div>
        <button>Forest Green & Black</button>
        <button>Desert Brown & Tan</button>
        <button>Ocean Blue & Grey</button>
        <button>Digital Red & Black</button>
      </div>
      <div>
        <button>Sky Blue & White</button>
        <button>Dark Grey & Black</button>
      </div>

      <select value="hi">
        <option style={{ display: "none" }} selected>
          Select Size
        </option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>

      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
};

module.exports = StyleSelector;
