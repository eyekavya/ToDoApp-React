import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import { StyledAddTodo } from "./StyledAddTodo";

function AddTodo({ todo, setTodo }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const onAddTodo = () => {
    if (inputText) {
      setTodo([...todo, { todo: inputText, completed: false }]);
      setInputText("");
    }
  };

  return (
    <StyledAddTodo>
      <input
        type="text"
        className="todo-input"
        onChange={handleChange}
        value={inputText}
      />
      <button type="submit" className="todo-btn" onClick={onAddTodo}>
        <i className="fas fa-plus-square"></i>
      </button>
      {todo.map((e, i) => {
        return (
          <TodoList
            key={i}
            todoitem={e.todo}
            todo={todo}
            setTodo={setTodo}
            index={i}
          />
        );
      })}
    </StyledAddTodo>
  );
}

export default AddTodo;
