import React from "react";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <form>
        <label>
          Find contact by name
          <input
            type="text"
            name="filter"
            value={value}
            onChange={onChangeFilter}
          />
        </label>
      </form>
    </>
  );
};

export default Filter;
