import React from "react";
import { StyledTodoList } from "./StyledTodoList";

function TodoList() {
  return (
    <StyledTodoList>
      <div className="flex-basic">
        <ul className="todo-list">
          <div className="todo">
            <li className="todo-item"></li>
            <button className="completed-btn">
              <i className="fas fa-check"></i>
            </button>
            <button className="dlt-btn">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </ul>
      </div>
    </StyledTodoList>
  );
}

export default TodoList;
