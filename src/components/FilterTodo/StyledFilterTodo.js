import styled from "styled-components";

export const StyledFilterTodo = styled.section`
  select {
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background-image: none;
    color: #ff6f47;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    width: 12rem;
    padding: 0.7rem;
  }

  .select {
    margin: 1rem;
    position: relative;
    overflow: hidden;
  }

  .select::after {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.7rem;
    background: #ff6f47;
    cursor: pointer;
    pointer-events: none;
  }
`;
