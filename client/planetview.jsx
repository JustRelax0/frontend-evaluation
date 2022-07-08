import React from "react";
import Residentlist from "./residentlist.jsx";
import Residentview from "./residentview.jsx";

const Planetview = (props) => {
  if (props.view === "resident") {
    return <Residentview currentResidentInfo={props.currentResidentInfo} />;
  }
  if (props.residents.length > 0) {
    return (
      <div>
        <Residentlist
          residents={props.residents}
          residentViewNav={props.residentViewNav}
        />
      </div>
    );
  } else {
    return <div>No residents for this planet</div>;
  }
};

export default Planetview;
