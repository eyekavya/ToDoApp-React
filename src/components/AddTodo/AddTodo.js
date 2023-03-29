import React from "react";
import { StyledAddTodo } from "./StyledAddTodo";

function AddTodo() {
  const onAddTodo = () => {
    console.log("kkk");
  };
  return (
    <StyledAddTodo>
      <input type="text" className="todo-input" />
      <button type="submit" className="todo-btn" onClick={onAddTodo}>
        <i className="fas fa-plus-square"></i>
      </button>
    </StyledAddTodo>
  );
}

export default AddTodo;
