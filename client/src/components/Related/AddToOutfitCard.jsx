const React = require("react");
const { Card } = require("@material-ui/core");
const { CardActionArea } = require("@material-ui/core");
const { CardContent } = require("@material-ui/core");
const { Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const { Icon } = require("@material-ui/core");

useStyles = makeStyles({
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
            onClick={() => console.log("add to outfit")}
          >
            add_circle
          </Icon>
        </CardContent>
      </Card>
    </div>
  );
};
