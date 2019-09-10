const React = require("react");
const { makeStyles } = require("@material-ui/core");
const {
  Button,
  Link,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Typography
} = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  answerbutton: {
    fontWeight: "fontWeightLight",
    fontSize: 10,
    verticalAlign: "top",
    underline: "always"
  },
  button: {},
  input: {},
  modal: {
    display: "flex",
    height: "100%",
    overflow: "scroll",
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

module.exports = ({
  fields,
  qarfield,
  modalTitle,
  bodyTextPlaceholder,
  children,
  handleSubmit,
  buttonText
}) => {
  const classes = useStyles();

  const common = {
    modalTitle: modalTitle,
    bodyText: bodyTextPlaceholder,
    nicknameText: "jack123",
    emailText: "jack@gmail.com"
  };

  const [values, setValues] = React.useState(
    Object.assign(common, fields || {})
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

  return (
    <div>
      {qarfield === "answer" ? (
        <Link onClick={handleOpen} className={classes.answerbutton}>
          Add Answer
        </Link>
      ) : (
        <Button
          variant={"outlined"}
          className={classes.button}
          onClick={handleOpen}
        >
          {buttonText}
        </Button>
      )}
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
            <Typography id="transition-modal-title">{modalTitle}</Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="standard-multiline-flexible"
                label={bodyTextPlaceholder}
                multiline
                rowsMax="4"
                placeholder={bodyTextPlaceholder}
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
                helperText="For privacy reasons, do not use your full name or email address"
              />
              <br />
              <TextField
                required
                id="standard-required"
                label="E-mail"
                placeholder={values.emailText}
                className={classes.textField}
                margin="normal"
                helperText="For authentication reasons, you will not be emailed"
              />
              {children}
            </form>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={handleSubmit || (() => {})}
            >
              {`SUBMIT YOUR ${qarfield}`}
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
