import React from "react";
import { StyledDeleteAllTodo } from "./StyledDeleteAllTodo";

function DeleteAllTodo({ setTodo }) {
  const onDeleteAll = () => {
    setTodo([]);
  };

  return (
    <StyledDeleteAllTodo>
      <button className="dlt-btn dlt-all-btn" onClick={onDeleteAll}>
        <i className="fas fa-trash"></i>
      </button>
    </StyledDeleteAllTodo>
  );
}

export default DeleteAllTodo;
