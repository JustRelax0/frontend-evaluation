import React from "react";

const Planet = (props) => {
  const getResidents = () => {
    props.getResidents(props.name);
  };
  return (
    <div onClick={getResidents} className="planet">
      {props.name}
    </div>
  );
};

export default Planet;
