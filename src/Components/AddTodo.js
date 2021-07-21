import React, { useState } from "react";
import classes from "../Styles/AddTodo.module.css";

const AddUser = ({ onAddHandler, deleteAllTodos }) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let text = input;
    onAddHandler(text);
    setInput("");
  };

  const onDeleteAllHandler = () => {
    deleteAllTodos();
  };

  return (
    <React.Fragment>
      <div>
        <div className={classes.addtodo}>
          <form className={classes.form} onSubmit={onSubmitHandler}>
            <input
              class={classes.input}
              id="todoname"
              type="text"
              onChange={inputChangeHandler}
              value={input}
              autocomplete="off"
              placeholder="Enter todo here.. :)"
            ></input>{" "}
          </form>
          <button className={classes.button} onClick={onDeleteAllHandler}>
            Clear everything
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddUser;
