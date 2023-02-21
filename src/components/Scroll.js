import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "1px solid black",
        borderColor: "#cdecff",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
