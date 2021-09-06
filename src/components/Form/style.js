import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 800,
    fontSize: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: 20,
  },
  title: {
    margin: theme.spacing(6, 2, 2),
  },
}));

export default useStyles;
