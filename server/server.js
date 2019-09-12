const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const React = require("react");
const ReactDOM = require("react-dom/server");
const Reviews = require("./dist/ReviewsBundle.js").default;

const app = express();
const port = 3000;

app.use(cookieParser());

app.use((req, res, next) => {
  var cookie = req.cookies.cookieName;
  if (!cookie) {
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(10, randomNumber.length);
    res.cookie("cookieName", randomNumber);
  } else {
  }
  next();
});

app.use("/", express.static(path.join(__dirname, "../client/public/")));

app.get("/products/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/reviews", (req, res) => {
  console.log("Reviews", Reviews);
  let reviews = ReactDOM.renderToString(
    React.createElement(Reviews, {
      reviewsMeta: {
        product_id: 1,
        ratings: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        recommended: { 0: 0, 1: 0 },
        characteristics: {},
        avgRating: 5,
        ratingRelFreq: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      },
      reviews: [],
      currentProduct: {
        id: 1,
        name: "Camo Onesie",
        slogan: "Blend in to your crowd",
        description:
          "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        category: "Jackets",
        default_price: "140",
        features: { feature: "Buttons", value: "Brass" }
      },
      changeReviewsMeta: () => {},
      changeReviews: () => {}
    })
  );
  console.log(reviews);
  res.send(reviews);
});

app.listen(port, () => console.log(`Panther listening on port ${port}!`));
