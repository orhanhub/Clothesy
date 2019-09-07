const React = require("react");
const ImageGallery = require("./ImageGallery.jsx");
const ProductInformation = require("./ProductInformation.jsx");
const StyleSelector = require("./StyleSelector.jsx");
const ProductDescription = require("./ProductDescription.jsx");
const { Grid } = require("@material-ui/core");
const ImageGalleryList = require("./ImageGalleryList.jsx");
const QuantitySizeSelect = require("./QuantitySizeSelect.jsx");
const AddToCart = require("./AddToCart.jsx");

const App = ({ initialProduct }) => {
  const [state, setState] = React.useState({
    styles: {},
    tileIndex: 0
  });

  const changeStyle = index => {
    setState({ ...state, styles: initialProduct.productStyles[index] });
  };

  const changeTile = index => {
    setState({ ...state, tileIndex: index });
  };

  const updateDefaultStyle = style => {
    setState({ ...state, selectedStyle: style[0] });
  };

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
        <Grid item xs={1}>
          <ImageGalleryList
            initialProduct={initialProduct}
            styles={state.styles}
            changeTile={changeTile}
          />
        </Grid>
        <Grid item xs={8}>
          <ImageGallery
            initialProduct={initialProduct}
            styles={state.styles}
            tileIndex={state.tileIndex}
          />
        </Grid>

        <Grid item xs={3}>
          <Grid item xs={12}>
            <ProductInformation initialProduct={initialProduct} />
          </Grid>
          <Grid item xs={12}>
            <StyleSelector
              initialProduct={initialProduct}
              changeStyle={changeStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} justify="center">
              {state.selectedStyle ? (
                <QuantitySizeSelect selectedStyle={state.selectedStyle} />
              ) : null}
              <AddToCart />
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
