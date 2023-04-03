import React from "react";
import { StyledTodoList } from "./StyledTodoList";

function TodoList({ todoitem, todo, setTodo, index }) {
  const onDeleteTodo = () => {
    return todo.filter((item) => item !== todoitem);
  };

  const onComplete = () => {
    todo[index].completed = !todo[index].completed;
    setTodo([...todo]);
  };

  return (
    <StyledTodoList>
      <div className="flex-basic">
        <ul className="todo-list">
          <div className="todo">
            <li
              className={`todo-item ${
                todo[index].completed ? "completed" : ""
              }`}
            >
              {todoitem}
            </li>
            <button className="completed-btn" onClick={onComplete}>
              <i
                className={` ${
                  todo[index].completed ? "fas fa-xmark" : "fas fa-check"
                }`}
              ></i>
            </button>
            <button className="dlt-btn" onClick={onDeleteTodo}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </ul>
      </div>
    </StyledTodoList>
  );
}

export default TodoList;
