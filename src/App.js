import React, { useState } from "react";
import Header from "./UI/Header";
import TodoList from "./Components/TodoList";
import classes from "./Styles/App.module.css";
import todoImage from "./sources/mountain.jpg";

function App() {
  return (
    <div>
      <div>
        <div className={classes["main-image"]}>
          <img src={todoImage} alt="mountain"></img>
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
