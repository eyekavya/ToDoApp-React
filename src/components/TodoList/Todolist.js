import React from "react";
import { StyledTodoList } from "./StyledTodoList";

function TodoList({ todo, setTodo }) {
  const onComplete = (i) => {
    todo[i].completed = !todo[i].completed;
    setTodo([...todo]);
    console.log(todo);
  };

  const onDeleteTodo = (i) => {
    todo.splice(i, 1);
    setTodo([...todo]);
    console.log(todo);
  };

  return (
    <StyledTodoList>
      <div className="flex-basic">
        <ul className="todo-list">
          {todo.map((e, i) => {
            return (
              <div className="todo" key={i}>
                <li
                  className={`todo-item ${
                    todo[i].completed ? "completed" : ""
                  }`}
                >
                  {e.todo}
                </li>
                <button
                  className="completed-btn"
                  onClick={() => {
                    onComplete(i);
                  }}
                >
                  <i
                    className={` ${
                      todo[i].completed ? "fas fa-xmark" : "fas fa-check"
                    }`}
                  ></i>
                </button>
                <button
                  className="dlt-btn"
                  onClick={() => {
                    onDeleteTodo(i);
                  }}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </StyledTodoList>
  );
}

export default TodoList;
