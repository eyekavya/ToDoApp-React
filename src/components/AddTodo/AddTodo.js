import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import { StyledAddTodo } from "./StyledAddTodo";

function AddTodo() {
  const [todo, setTodo] = useState([]);
  const [showTodoList, setShowTodoList] = useState(false);

  let inputTodo = "";

  const handleChange = (event) => {
    inputTodo = event.target.value;
  };

  const onAddTodo = () => {
    setShowTodoList(true);
    setTodo([...todo, inputTodo]);
  };

  return (
    <StyledAddTodo>
      <input type="text" className="todo-input" onChange={handleChange} />
      <button type="submit" className="todo-btn" onClick={onAddTodo}>
        <i className="fas fa-plus-square"></i>
      </button>
      {todo.map((e, i) => {
        return showTodoList && <TodoList key={i} todo={e} />;
      })}
    </StyledAddTodo>
  );
}

export default AddTodo;
