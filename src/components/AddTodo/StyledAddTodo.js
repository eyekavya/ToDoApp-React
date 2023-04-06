import styled from "styled-components";

export const StyledAddTodo = styled.section`
  input,
  button {
    padding: 0.5rem;
    background-color: #fff;
    font-size: 1.2rem;
    border: none;
    outline: none;
  }

  button {
    color: #d88771;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #d88771;
    color: #fff;
  }
`;
