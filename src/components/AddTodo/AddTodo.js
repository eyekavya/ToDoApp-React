import React from "react";
import { StyledAddTodo } from "./StyledAddTodo";

function AddTodo() {
  return (
    <StyledAddTodo>
      <div class="flex-basic">
        <form>
          <input type="text" class="todo-input" />
          <button type="submit" class="todo-btn">
            <i class="fas fa-plus-square"></i>
          </button>
        </form>
      </div>
    </StyledAddTodo>
  );
}

export default AddTodo;
