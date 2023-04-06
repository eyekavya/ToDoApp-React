import { useEffect, useState } from "react";
import { StyledTodoList } from "./StyledTodoList";

function TodoList({ todo, setTodo, selectValue }) {
  const [filteredTodo, setFilteredTodo] = useState(todo);
  const onComplete = (i) => {
    todo[i].completed = !todo[i].completed;
    setTodo([...todo]);
  };

  const onDeleteTodo = (i) => {
    todo.splice(i, 1);
    setTodo([...todo]);
  };

  useEffect(() => {
    if (selectValue === "completed") {
      setFilteredTodo(todo.filter((e) => e.completed === true));
    } else if (selectValue === "uncompleted") {
      setFilteredTodo(todo.filter((e) => e.completed === false));
    } else {
      setFilteredTodo(todo);
    }
  }, [todo, selectValue]);

  return (
    <StyledTodoList>
      <div className="flex-basic">
        <ul className="todo-list">
          {filteredTodo.map((e, i) => {
            return (
              <div className="todo" key={i}>
                <li className={`todo-item ${e.completed ? "completed" : ""}`}>
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
                      e.completed ? "fas fa-xmark" : "fas fa-check"
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
