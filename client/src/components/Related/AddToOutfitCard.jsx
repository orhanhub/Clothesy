const React = require("react");
const { Card } = require("@material-ui/core");
const { CardActionArea } = require("@material-ui/core");
const { CardContent } = require("@material-ui/core");
const { Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const { Icon } = require("@material-ui/core");

const useStyles = makeStyles({
  card: {
    width: 200,
    height: 300,
    maxHeight: 350,
    borderRadius: 0,
    border: "1px solid black",
    boxShadow: "none",
    display: "inline - block"
  },
  cardContent: {
    padding: "2px"
  },
  addToOutfit: {
    fontSize: 14
  },
  media: {
    height: "200px"
  }
});

const addToOutfit = product => {
  if (window.localStorage.getItem("outfit") === null) {
    window.localStorage.setItem("outfit", JSON.stringify([product]));
  } else {
    let items = JSON.parse(window.localStorage.getItem("outfit"));
    if (items.indexOf(product) < 0) items.push(product);
    window.localStorage.setItem("outfit", JSON.stringify(items));
  }
};

module.exports = function AddToOutfitCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.addToOutfit}>Add To Outfit</Typography>
          <Icon
            className={classes.icon}
            color="action"
            onClick={() => {
              addToOutfit(props.product);
            }}
          >
            add_circle
          </Icon>
        </CardContent>
      </Card>
    </div>
  );
};
