import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Checkbox,
} from "@material-ui/core";
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import useStyles from "./style";

export default function All(props) {
  const { number, name } = props;
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <ListItem className={classes.root}>
        <Checkbox checked={checked} onChange={handleChange} />
        <ListItemIcon>
          <PermContactCalendarIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
        <ListItemText secondary={number} />
        <Button variant="contained" className={classes.button}>
          Editar
        </Button>
        <Button variant="contained" className={classes.button}>
          Deletar
        </Button>
      </ListItem>
      
    </>
  );
}
