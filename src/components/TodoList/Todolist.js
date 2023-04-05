import React from "react";
import { StyledTodoList } from "./StyledTodoList";

function TodoList({ todoitem, todo, setTodo, index }) {
  const onComplete = () => {
    todo[index].completed = !todo[index].completed;
    setTodo([...todo]);
    console.log(todo);
  };

  const onDeleteTodo = () => {
    todo.splice(index, 1);
    setTodo([...todo]);
    console.log(todo);
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
