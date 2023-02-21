import React from "react";

const SeachBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 br2 b--blue bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SeachBox;
