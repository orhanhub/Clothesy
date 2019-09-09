const React = require("react");
const { useState, useEffect } = require("react");
const { makeStyles } = require("@material-ui/core/styles");
const { Modal, Backdrop, Fade, Grid } = require("@material-ui/core");
const axios = require("../../../../helpers/axiosApi.js");

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  imageCrop: {
    height: "100px",
    width: "100px",
    objectFit: "cover"
  },
  spacing: {
    marginBottom: "20px",
    height: "100px",
    width: "100px",
    marginTop: "10px"
  }
}));

ShowCart = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [productImages, setProductImages] = useState([]);
  const [productInfo, setProductInfo] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    axios
      .get(`/cart/${document.cookie.split("=")[1]}`)
      .then(response => {
        let images = Promise.all(
          response.data.map(product => {
            return axios.get(
              `/products/${product.product_id.toString()}/styles`
            );
          })
        );

        let productId = Promise.all(
          response.data.map(product => {
            return axios.get(`/products/${product.product_id.toString()}`);
          })
        );

        return Promise.all([images, productId]);
      })
      .then(response => {
        setProductImages(
          response[0].map(product => {
            return product.data.results[0].photos[0].url;
          })
        );
        setProductInfo(
          response[1].map(product => {
            return product.data;
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Cart
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Shopping Cart</h2>
            <Grid container spacing={1} justify="center">
              <Grid item xs={6}>
                {productImages.map((image, i) => {
                  return (
                    <div className={classes.spacing} key={i}>
                      <img
                        id="transition-modal-description"
                        src={image}
                        className={classes.imageCrop}
                      />
                    </div>
                  );
                })}
              </Grid>
              <Grid item xs={6}>
                {productInfo.map((info, i) => {
                  return (
                    <div className={classes.spacing} key={i}>
                      <div style={{ fontSize: "12px" }}>{info.category}</div>
                      <div>{info.name}</div>
                      <div style={{ fontSize: "12px" }}>
                        ${info.default_price}
                      </div>
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

module.exports = ShowCart;
