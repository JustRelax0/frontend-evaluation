import React from "react";

const Resident = (props) => {
  return <div>{props.name ? props.name : "Planet has no residents"}</div>;
};

export default Resident;
