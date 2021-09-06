import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";
import All from "../../components/All";
import Form from "../../components/Form";
import ButtonAdd from "../../components/button";

const DATA = [
  { name: "Tiago", number: "99999999999" }, 
  { name: "Zardin", number: "00000000000" }, 
];

const taskList = DATA.map((task) => <All name={task.name} number={task.number} />);

export default function Home() {
  const classes = useStyles();

  const [value, setValue] = useState("Nome");
  const [number, setNumber] = useState("5199999-9999");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("1", value);
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setValue(value);
      console.log("2", value);
    }
  }

  const handleChange2 = (e) => {
    setNumber(e.target.number);
    console.log("n1", value);
  };

  function handleKeyPress2(e) {
    if (e.key === "Enter") {
      setNumber(number);
      console.log("n2", value);
    }
  }

  function handleClick() {
    setValue(value);
    setNumber(number);
    console.log("3", value);
  }

  return (
    <Container fixed>
      <div>
        <h1>Lista Telefone</h1>
      </div>
      <Grid>
        <form>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              Insira Nome e Telefone
            </label>
          </h2>
        </form>
       
      </Grid>
      <Grid>
        <Form
          label = "Nome"
          value={value}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
        <Form
          label = "Numero"
          value={number}
          onKeyPress={handleKeyPress2}
          onChange={handleChange2}
        />
        <ButtonAdd  onClick={handleClick} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Agenda
        </Typography>
        <div>{taskList}</div>
      </Grid>
    </Container>
  );
}
