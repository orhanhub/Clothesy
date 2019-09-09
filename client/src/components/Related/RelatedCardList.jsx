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
  const onStarClick = id => {
    console.log("button");
    console.log(id);

    handleOpen();
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
        <Fade in={open} className={classes.paper}>
          <div>Comparison Modal</div>
        </Fade>
      </Modal>
      <div className={classes.root}>
        <GridList className={classes.gridList}>{items}</GridList>
      </div>
    </div>
  );
};
