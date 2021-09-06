import React from "react";
import { TextField, Box } from "@material-ui/core";
import useStyles from "./style";

export default function Form(props) {
  const { value, label, onKeyPress, onChange } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField
        id="standard-basic"
        label={label}
        value={value}
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
      
    </Box>
  );
}
