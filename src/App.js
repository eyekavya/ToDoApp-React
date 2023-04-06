import "./App.css";

import { useState } from "react";
import Heading from "./components/Heading/Heading";
import AddTodo from "./components/AddTodo/AddTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import DeleteAllTodo from "./components/DeleteAllTodo/DeleteAllTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [selectValue, setSelectValue] = useState("all");
  return (
    <>
      <Heading />
      <div className="flex-basic">
        <AddTodo todo={todo} setTodo={setTodo} />
        <FilterTodo setSelectValue={setSelectValue} todo={todo} />
        <DeleteAllTodo setTodo={setTodo} />
      </div>
      <TodoList todo={todo} setTodo={setTodo} selectValue={selectValue} />
    </>
  );
}

export default App;
