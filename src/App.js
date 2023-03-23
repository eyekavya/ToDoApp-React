import "./App.css";

import React from "react";
import Heading from "./components/Heading/Heading";
import AddTodo from "./components/AddTodo/AddTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";

function App() {
  return (
    <>
      <Heading />
      <div className="flex-basic">
        <AddTodo />
        <FilterTodo />
      </div>
    </>
  );
}

export default App;
