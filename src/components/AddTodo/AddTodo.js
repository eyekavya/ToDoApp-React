import React, { useState } from "react";
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onAddTodo();
          }
        }}
      />
      <button type="submit" className="todo-btn" onClick={onAddTodo}>
        <i className="fas fa-plus-square"></i>
      </button>
    </StyledAddTodo>
  );
}

export default AddTodo;
