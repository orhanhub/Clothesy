const React = require("react");
const { useState, useEffect } = require("react");
const ImageGallery = require("./ImageGallery.jsx");
const ProductInformation = require("./ProductInformation.jsx");
const StyleSelector = require("./StyleSelector.jsx");
const ProductDescription = require("./ProductDescription.jsx");
const { Grid } = require("@material-ui/core");
const ImageGalleryList = require("./ImageGalleryList.jsx");
const QuantitySizeSelect = require("./QuantitySizeSelect.jsx");
const AddToCart = require("./AddToCart.jsx");
const ShowCart = require("./ShowCart.jsx");
const axios = require("../../../../helpers/axiosApi.js");

const App = ({ initialProduct }) => {
  const [state, setState] = useState({
    styles: {},
    soldOut: false
  });

  const [productImages, setProductImages] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [pictureIndex, setPictureIndex] = React.useState(0);

  const handleSelect = selectedIndex => {
    setPictureIndex(selectedIndex);
  };

  const changeStyle = index => {
    setState({ ...state, styles: initialProduct.productStyles[index] });
  };

  const updateDefaultStyle = style => {
    setState({ ...state, selectedStyle: style[0] });
  };

  const resetStyle = () => {
    setState({ ...state, styles: {} });
  };

  const handleQuantity = info => {
    if (info === "soldOut") {
      setState({ ...state, soldOut: true });
    }
    if (info === "inStock") {
      setState({ ...state, soldOut: false });
    }
  };

  const getCart = () => {
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
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    resetStyle();
    handleSelect(0);
  }, [initialProduct]);

  return (
    <div>
      {initialProduct.productStyles[0] && !state.selectedStyle
        ? updateDefaultStyle(
            initialProduct.productStyles.filter(style => {
              return style["default?"] === 1;
            })
          )
        : null}

      <Grid container spacing={1} justify="center">
        <Grid item xs={1} style={{ overflowY: "auto" }}>
          <ImageGalleryList
            initialProduct={initialProduct}
            styles={state.styles}
            handleSelect={handleSelect}
          />
        </Grid>
        <Grid item xs={8}>
          <ImageGallery
            initialProduct={initialProduct}
            styles={state.styles}
            pictureIndex={pictureIndex}
            handleSelect={handleSelect}
          />
        </Grid>

        <Grid item xs={3}>
          <Grid item xs={12}>
            {state.selectedStyle ? (
              <ProductInformation
                initialProduct={initialProduct}
                styles={state.styles}
                selectedStyle={state.selectedStyle}
              />
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <StyleSelector
              initialProduct={initialProduct}
              changeStyle={changeStyle}
              handleSelect={handleSelect}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} justify="center" alignItems="center">
              {state.selectedStyle ? (
                <QuantitySizeSelect
                  selectedStyle={state.selectedStyle}
                  handleQuantity={handleQuantity}
                  styles={state.styles}
                  initialProduct={initialProduct}
                />
              ) : null}
              <AddToCart
                soldOut={state.soldOut}
                productId={initialProduct.currentProduct.id}
                getCart={getCart}
              />
              <ShowCart
                productImages={productImages}
                productInfo={productInfo}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center">
        <Grid item xs={6}>
          <ProductDescription initialProduct={initialProduct} />
        </Grid>
      </Grid>
    </div>
  );
};

module.exports = App;
