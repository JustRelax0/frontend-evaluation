import React from "react";
import Planet from "./planet.jsx";

const Planetlist = (props) => (
  <div>
    {props.planets.map((planet) => {
      return (
        <Planet
          name={planet.name}
          currentPlanetView={props.currentPlanetView}
          getResidents={props.getResidents}
        />
      );
    })}
  </div>
);

export default Planetlist;
