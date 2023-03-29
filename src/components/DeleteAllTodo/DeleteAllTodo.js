import React from "react";
import { StyledDeleteAllTodo } from "./StyledDeleteAllTodo";

function DeleteAllTodo() {
  return (
    <StyledDeleteAllTodo>
      <button className="dlt-btn dlt-all-btn">
        <i className="fas fa-trash"></i>
      </button>
    </StyledDeleteAllTodo>
  );
}

export default DeleteAllTodo;
