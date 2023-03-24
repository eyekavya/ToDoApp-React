import React from "react";
import { StyledDeleteAllTodo } from "./StyledDeleteAllTodo";

function DeleteAllTodo() {
  return (
    <StyledDeleteAllTodo>
      <button class="dlt-btn dlt-all-btn">
        <i class="fas fa-trash"></i>
      </button>
    </StyledDeleteAllTodo>
  );
}

export default DeleteAllTodo;
