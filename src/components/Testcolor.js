import React from "react";

const Testcolor = ({ selected, options }) => {
  return (
    <p
      style={{ color: `${selected.value}` }}
    >{`The Color is ${selected.label}`}</p>
  );
};

export default Testcolor;
