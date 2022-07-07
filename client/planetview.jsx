import React from "react";
import Residentlist from "./residentlist.jsx";

const Planetview = (props) => {
  if (props.residents.length > 0) {
    return (
      <div>
        <Residentlist residents={props.residents} />
      </div>
    );
  } else {
    return <div>No residents for this planet</div>;
  }
};

export default Planetview;
