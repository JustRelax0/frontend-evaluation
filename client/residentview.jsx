import React from "react";

const Residentview = (props) => {
  return (
    <div>
      <div>{props.currentResidentInfo.name}</div>
      <div>{props.currentResidentInfo.height}</div>
      <div>{props.currentResidentInfo.mass}</div>
      <div>{props.currentResidentInfo.hair_color}</div>
      <div>{props.currentResidentInfo.skin_color}</div>
      <div>{props.currentResidentInfo.eye_color}</div>
      <div>{props.currentResidentInfo.birth_year}</div>
      <div>{props.currentResidentInfo.gender}</div>
    </div>
  );
};

export default Residentview;
