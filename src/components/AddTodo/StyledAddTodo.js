import styled from "styled-components";

export const StyledAddTodo = styled.section`
  .flex-basic {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form input,
  form button {
    padding: 0.5rem;
    background-color: #fff;
    font-size: 1.2rem;
    border: none;
    outline: none;
  }

  form button {
    color: #d88771;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  form button:hover {
    background-color: #d88771;
    color: #fff;
  }
`;
