const React = require("react");
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

const QuantitySizeSelect = () => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <div>
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

module.exports = QuantitySizeSelect;
