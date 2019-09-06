const React = require("react");
const { Card } = require("@material-ui/core");
const { CardActionArea } = require("@material-ui/core");
const { CardContent } = require("@material-ui/core");
const { Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const { CardMedia } = require("@material-ui/core");
const { StarBorder } = require("@material-ui/icons");
const { IconButton } = require("@material-ui/core");

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
  category: {
    fontSize: 10,
    textTransform: "uppercase"
  },
  productName: {
    marginBottom: 0,
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    lineHeight: "10pt"
  },
  media: {
    height: "200px"
  },
  price: {
    fontSize: 10,
    lineHeight: "8pt"
  },
  star: {
    margin: "10px 0 0 170px"
  }
});

module.exports = function CardItem(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea
          component="div"
          onClick={() => {
            console.log("click click");
          }}
        >
          <CardMedia
            className={classes.media}
            image={props.styles.results[0].photos[0].thumbnail_url}
            title="Contemplative Reptile"
          >
            {/* <IconButton className={classes.star}> */}
            <StarBorder
              className={classes.star}
              onClick={() => {
                console.log("button");
              }}
            />
            {/* </IconButton> */}
          </CardMedia>
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
        </CardActionArea>
      </Card>
    </div>
  );
};
