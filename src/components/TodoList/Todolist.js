import React from "react";
import { StyledTodoList } from "./StyledTodoList";

function TodoList(props) {
  //   const compStyle = {
  //     completed: {
  //       textDecoration: "line-through",
  //       opacity: "0.5",
  //     },
  //   };
  const onDeleteTodo = () => {
    return props.todo.filter((item) => item !== props.todoitem);
  };

  const onComplete = () => {
    console.log(props.todoitem);
    .style.textDecoration = "line-through";
  };

  return (
    <StyledTodoList>
      <div className="flex-basic">
        <ul className="todo-list">
          <div className="todo">
            <li className="todo-item">{props.todoitem}</li>
            <button className="completed-btn" onClick={onComplete}>
              <i className="fas fa-check"></i>
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
