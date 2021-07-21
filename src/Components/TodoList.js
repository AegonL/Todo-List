import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo";
import classes from "../Styles/TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState();
  const [editedText, setEditedText] = useState("");

  const onAddHandler = (text) => {
    if (text != "") {
      setTodos([
        ...todos,
        {
          name: text,
          id: uuidv4(),
        },
      ]);
    } else {
      window.confirm(`Please enter valid input.`);
    }
  };

  const deleteTodoHandler = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`))
      setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodoHandler = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.name = editedText;
      }
      return todo;
    });
    setTodos(updatedTodos);

    setTodoEditing(null);
  };

  const deleteAllTodos = () => {
    if (window.confirm("Are you sure you want to delete everything?")) {
      setTodos([]);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.addtodo}>
        <AddTodo onAddHandler={onAddHandler} deleteAllTodos={deleteAllTodos} />
      </div>
      <div>
        <div className={classes.card}>
          {todos.map((todo) => {
            return (
              <div>
                <div className={classes.actions}>
                  <Todo name={todo.name} />
                  <div>
                    <button
                      className={classes.button}
                      onClick={() => deleteTodoHandler(todo.id, todo.name)}
                    >
                      X
                    </button>
                    <button
                      className={classes.button}
                      onClick={() => setTodoEditing(todo.id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>

                {todoEditing === todo.id ? (
                  <form>
                    <input
                      type="text"
                      onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button onClick={() => editTodoHandler(todo.id)}>v</button>
                  </form>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoList;
