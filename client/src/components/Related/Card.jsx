const React = require("react");
const { Card } = require("@material-ui/core");
const { CardActions } = require("@material-ui/core");
const { CardContent } = require("@material-ui/core");
const { Button } = require("@material-ui/core");
const { Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const { CardMedia } = require("@material-ui/core");
const { sizing } = "@material-ui/system";

useStyles = makeStyles({
  card: {
    maxWidth: 100,
    maxHeight: 150,
    borderRadius: 0,
    border: "1px solid black",
    boxShadow: "none",
    display: "inline - block"
  },
  cardContent: {
    padding: "2px"
  },
  category: {
    fontSize: 6,
    textTransform: "uppercase"
  },
  productName: {
    marginBottom: 0,
    fontSize: 8,
    fontWeight: "bold",
    color: "black",
    lineHeight: "6pt"
  },
  media: {
    height: 100
  },
  price: {
    fontSize: 5,
    lineHeight: "8pt"
  }
});

module.exports = function CardItem(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.styles.results[0].photos[0].thumbnail_url}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.category}
            color="textSecondary"
            gutterBottom
          >
            {props.product.category}
          </Typography>
          <Typography className={classes.productName}>
            Expanded Product Name with Extra Text
          </Typography>
          <Typography className={classes.price} color="textSecondary">
            $1000
          </Typography>
          <Typography className={classes.productName}>★★★★★</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
