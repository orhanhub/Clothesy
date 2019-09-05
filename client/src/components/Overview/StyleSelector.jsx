const React = require("react");
const { Grid } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const {
  InputLabel,
  FormControl,
  Select,
  MenuItem
} = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const StyleSelector = () => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

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

      <FormControl className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Select Size
        </InputLabel>
        <Select
          labelWidth={labelWidth}
          inputProps={{
            name: "age",
            id: "filled-age-simple"
          }}
        >
          <MenuItem value="S">S</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="L">L</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Quantity
        </InputLabel>
        <Select
          labelWidth={labelWidth}
          inputProps={{
            name: "age",
            id: "filled-age-simple"
          }}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

module.exports = StyleSelector;
