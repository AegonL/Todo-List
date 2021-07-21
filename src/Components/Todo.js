import React, { useState } from "react";
import classes from "../Styles/Todo.module.css";

const Todo = ({ name }) => {
  return (
    <div class={classes.todolist}>
      <div class={classes.todo}>{name}</div>
    </div>
  );
};

export default Todo;
