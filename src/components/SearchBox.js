import React from "react";

const SearchBox = ({ searchOnChangeHandler }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search robots"
        onChange={searchOnChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
