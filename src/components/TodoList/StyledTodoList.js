import styled from "styled-components";

export const StyledTodoList = styled.section`
  .todo-list {
    list-style: none;
    min-width: 30%;
  }

  .todo {
    background-color: #fff;
    margin: 0.5rem;
    color: #000;
    font: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s ease;
  }

  .todo li {
    flex: 1;
  }

  .completed-btn,
  .dlt-btn {
    background-color: #ff6f47;
    color: #fff;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .completed-btn {
    background-color: rgb(73, 204, 73);
  }

  .todo-item {
    padding: 0rem 0.5rem;
  }

  .fa-trash,
  .fa-check,
  .fa-xmark {
    pointer-events: none;
  }

  .completed {
    text-decoration: line-through;
    opacity: 0.5;
  }
`;
