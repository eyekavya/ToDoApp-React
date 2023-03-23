import React from "react";
import { StyledFilterTodo } from "./StyledFilterTodo";

function FilterTodo() {
  return (
    <StyledFilterTodo>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </StyledFilterTodo>
  );
}

export default FilterTodo;
