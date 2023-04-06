import { StyledFilterTodo } from "./StyledFilterTodo";

function FilterTodo({ setSelectValue }) {
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <StyledFilterTodo>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </StyledFilterTodo>
  );
}

export default FilterTodo;
