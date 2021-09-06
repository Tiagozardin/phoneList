import React from "react";
import { Button, Box } from "@material-ui/core";
import useStyles from "./style";

export default function ButtonAdd(props) {
  const {onClick } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button variant="contained" onClick={onClick}>
        Adicionar
      </Button>
    </Box>
  );
}
