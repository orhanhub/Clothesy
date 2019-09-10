const React = require("react");
const { Grid } = require("@material-ui/core");

const StyleSelector = ({ initialProduct, changeStyle, handleSelect }) => {
  const handleClick = index => {
    changeStyle(index);
    handleSelect(0);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <strong>Style</strong> > Selected Style
      </div>

      <Grid container spacing={1} justify="center">
        {initialProduct.productStyles.map((style, i) => {
          return (
            <Grid key={i} item xs={3} style={{ padding: "10px" }}>
              <button
                onClick={() => handleClick(i)}
                style={{
                  borderRadius: "50%",
                  padding: "25px",
                  background: `url(${style.photos[0].url}) no-repeat center`,
                  backgroundSize: "80px auto"
                }}
              ></button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

module.exports = StyleSelector;
