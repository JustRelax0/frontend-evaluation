import React from "react";
import Resident from "./resident.jsx";

const Residentlist = (props) => (
  <div>
    {props.residents.map((resident) => {
      return (
        <Resident
          resident={resident}
          name={resident.name}
          height={resident.height}
          mass={resident.mass}
          hair_color={resident.hair_color}
          skin_color={resident.skin_color}
          eye_color={resident.eye_color}
          birth_year={resident.birth_year}
          gender={resident.gender}
          residentViewNav={props.residentViewNav}
        />
      );
    })}
  </div>
);

export default Residentlist;
