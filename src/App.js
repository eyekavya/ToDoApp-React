import "./App.css";

import React from "react";
import Heading from "./components/Heading/Heading";
import AddTodo from "./components/AddTodo/AddTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import DeleteAllTodo from "./components/DeleteAllTodo/DeleteAllTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <Heading />
      <div className="flex-basic">
        <AddTodo />
        <FilterTodo />
        <DeleteAllTodo />
      </div>
      <TodoList />
    </>
  );
}

export default App;
