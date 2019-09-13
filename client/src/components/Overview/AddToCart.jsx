const React = require("react");
const { Button } = require("@material-ui/core");
const AddCartMessage = require("./AddCartMessage.jsx");
const axios = require("../../../../helpers/axiosApi.js");

const AddToCart = ({ soldOut, productId, getCart }) => {
  handleClick = () => {
    axios
      .post("/cart", {
        user_session: parseInt(document.cookie.split("=")[1]),
        product_id: productId
      })
      .then(() => {
        getCart();
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      {!soldOut ? (
        <AddCartMessage variant="outlined" handleCartClick={handleClick} />
      ) : (
        <Button
          variant="contained"
          color="secondary"
          disabled
          className={classes.button}
        >
          SOLD OUT
        </Button>
      )}
    </div>
  );
};

module.exports = AddToCart;
