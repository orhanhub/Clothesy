const React = require("react");
const { makeStyles } = require("@material-ui/core");
const {
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Typography
} = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  button: {},
  input: {},
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
  }
}));

module.exports = props => {
  const classes = useStyles();

  const common = {
    bodyText: "default value here",
    nicknameText: "jack123",
    emailText: "jack@gmail.com"
  };

  const [values, setValues] = React.useState(
    Object.assign(common, props.fields || {})
  );

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //variant for answer button should not be outlined...
  //Add a question is static, must be dynamic
  return (
    <div>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleOpen}
      >
        ADD A QUESTION+
      </Button>

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
            <Typography id="transition-modal-title">
              {props.qarfield}
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="standard-multiline-flexible"
                label={props.bodyTextPlaceholder}
                multiline
                rowsMax="4"
                placeholder={values.bodyText}
                onChange={handleChange("bodyText")}
                className={classes.textField}
                margin="normal"
              />
              <br />
              <TextField
                required
                id="standard-required"
                label="Nickname"
                placeholder={values.nicknameText}
                className={classes.textField}
                margin="normal"
              />
              <br />
              <TextField
                required
                id="standard-required"
                label="E-mail"
                placeholder={values.emailText}
                className={classes.textField}
                margin="normal"
              />
              {props.children}
            </form>
            <button>submit</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
