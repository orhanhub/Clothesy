const React = require("react");
const { Card } = require("@material-ui/core");
const { CardActionArea } = require("@material-ui/core");
const { CardContent } = require("@material-ui/core");
const { Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const { CardMedia } = require("@material-ui/core");
const { StarBorder } = require("@material-ui/icons");
const { IconButton } = require("@material-ui/core");
const axios = require("../../../../helpers/axiosApi");
const calcAverageRatings = require("../../../../helpers/calcAverageRatings");

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

const getProduct = id => {
  axios.get(`/products/${id}`);
  // .then(data => {
  //   console.log(data);
  //   console.log("GET PRODUCT", {
  //     productCategory: data.data.category,
  //     productName: data.data.name
  //   });
  // })
  // .catch(err => {
  //   console.log("Axios error", err);
  // });
};

const getStyle = (id, styleNumber = 0) => {
  return;
  // .then(data => {
  //   console.log(data.data.results);
  //   console.log("GET STYLE: ", {
  //     original_price: data.data.results[styleNumber].original_price,
  //     sale_price: data.data.results[styleNumber].sale_price,
  //     previewImage:
  //       data.data.results[styleNumber].thumbnail_url ||
  //       "https://via.placeholder.com/300x450",
  //     starRating: undefined
  //   });
  // })
  // .catch(err => console.log("axios getstyle error"));
};

const getItemInfo = (id, styleNumber) => {
  const requests = [
    axios.get(`/products/${id}`),
    axios.get(`/products/${id}/styles`),
    axios.get(`/reviews/${id}/meta`)
  ];
  return Promise.all(requests)
    .then(data => {
      const cardInfo = {
        productCategory: data[0].data.category,
        productName: data[0].data.name,
        original_price: data[1].data.results[styleNumber].original_price,
        sale_price: data[1].data.results[styleNumber].sale_price,
        previewImage:
          data[1].data.results[styleNumber].thumbnail_url ||
          "https://via.placeholder.com/300x450",
        starRating: calcAverageRatings(data[2].data.ratings)
      };
      return cardInfo;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = function CardItem(props) {
  const classes = useStyles();
  // const id = this.props.id;
  // const styleNumber = this.props.styleNumber;

  getItemInfo(1, 0).then(data => {
    console.log(data);
    console.log("after promise all");
  });

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
