const React = require("react");
const CardItem = require("./Card.jsx");
const { GridList } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core");
const { GridListTile } = require("@material-ui/core");
const { Modal } = require("@material-ui/core");
const { Backdrop, Fade } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)"
    // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  },
  gridListItem: {
    width: "100px",
    margin: "0px"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

module.exports = function RelatedCardList(props) {
  if (!props.related) {
    return <div></div>;
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let modalInfo = "hello!";

  const onStarClick = selectedItem => {
    handleOpen();
    let currentName = props.indexProps.currentProduct.name;
    let currentFeatures = props.indexProps.currentProduct.features;
    let selectedName = selectedItem.productName;
    let selectedFeatures = selectedItem.features;
    // console.log(
    //   "currentName",
    //   currentName,
    //   "currentFeatures",
    //   currentFeatures,
    //   "selectedName",
    //   selectedName,
    //   "selectedFeatures",
    //   selectedFeatures
    // );
    for(let i = 0; i < currentFeatures.length; i++){
      
    }
  };

  const classes = useStyles();
  const items = props.related.map(item => {
    return (
      <CardItem
        id={item}
        key={item}
        onStarClick={onStarClick}
        changeCurrentProduct={props.changeCurrentProduct}
      />
    );
  });
  return (
    <div>
      <Modal
        aria-labelledby="item-comparison"
        aria-describedby="compares-selected-with-current-item"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open} className={classes.paper}>
          <div>{modalInfo}</div>
        </Fade>
      </Modal>
      <div className={classes.root}>
        <GridList className={classes.gridList}>{items}</GridList>
      </div>
    </div>
  );
};
