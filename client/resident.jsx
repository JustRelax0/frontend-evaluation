import React from "react";

const Resident = (props) => {
  const residentViewNav = (e) => {
    props.residentViewNav(e, props.resident);
  };
  return (
    <div onClick={residentViewNav} className="resident">
      {props.name ? props.name : "Planet has no residents"}
    </div>
  );
};

export default Resident;
