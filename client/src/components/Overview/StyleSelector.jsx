const React = require("react");
const { Grid } = require("@material-ui/core");

const StyleSelector = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <strong>Style</strong> > Selected Style
      </div>

      <Grid container spacing={1} justify="center">
        <Grid item xs={3} style={{ padding: "10px" }}>
          <button
            style={{
              "border-radius": "50%",
              padding: "25px",
              background:
                "url(https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=70&q=80) no-repeat center"
            }}
          ></button>
        </Grid>
        <Grid item xs={3} style={{ padding: "10px" }}>
          <button style={{ "border-radius": "50%", padding: "25px" }}></button>
        </Grid>
        <Grid item xs={3} style={{ padding: "10px" }}>
          <button style={{ "border-radius": "50%", padding: "25px" }}></button>
        </Grid>
        <Grid item xs={3} style={{ padding: "10px" }}>
          <button style={{ "border-radius": "50%", padding: "25px" }}></button>
        </Grid>
        <Grid item xs={3} style={{ padding: "10px" }}>
          <button style={{ "border-radius": "50%", padding: "25px" }}></button>
        </Grid>
        <Grid item xs={3} style={{ padding: "10px" }}>
          <button style={{ "border-radius": "50%", padding: "25px" }}></button>
        </Grid>
        <Grid item xs={3} style={{ padding: "10px" }}>
          <button style={{ "border-radius": "50%", padding: "25px" }}></button>
        </Grid>
        <Grid item xs={3} style={{ padding: "10px" }}>
          <button style={{ "border-radius": "50%", padding: "25px" }}></button>
        </Grid>
      </Grid>

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
