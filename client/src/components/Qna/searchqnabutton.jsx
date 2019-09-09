const React = require("react");
const { useState } = require("react");
const { fade, makeStyles } = require("@material-ui/core");
const { InputBase } = require("@material-ui/core");
const { Search } = require("@material-ui/icons");

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // "&:hover": {
    //   backgroundColor: fade(theme.palette.common.white, 0.25)
    // },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: 500
    }
  }
}));

module.exports.SearchQnaButton = ({ value, onChange }) => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");
  // const handleSubmit = e => {
  //   e.preventDefault();
  // };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Search />
      </div>
      <InputBase
        placeholder="SEARCH FOR ANSWERS..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

// primitive form of this component:
/*
   <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
      />
    </form>

    */
