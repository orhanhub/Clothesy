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
  answerbutton: {
    textAlign: "right",
    fontWeight: "fontWeightLight",
    fontSize: 10
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
  bodyTextPlaceholder,
  children,
  handleSubmit,
  buttonText
}) => {
  const classes = useStyles();

  const common = {
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
  //variant for answer button should not be outlined...
  //Add a question is static, must be dynamic
  return (
    <div>
      <Button
        variant={qarfield === "answer" ? "text" : "outlined"}
        className={
          qarfield === "answer" ? classes.answerbutton : classes.button
        }
        onClick={handleOpen}
      >
        {buttonText}
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
            <Typography id="transition-modal-title">{qarfield}</Typography>
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
