import React from "react";

const Pagenav = (props) => {
  const pageChanger = (e) => {
    props.getPlanets(e.target.innerText);
  };

  return (
    <div>
      <span className="pageNav" onClick={pageChanger}>
        1
      </span>
      <span className="pageNav" onClick={pageChanger}>
        2
      </span>
      <span className="pageNav" onClick={pageChanger}>
        3
      </span>
      <span className="pageNav" onClick={pageChanger}>
        4
      </span>
      <span className="pageNav" onClick={pageChanger}>
        5
      </span>
      <span className="pageNav" onClick={pageChanger}>
        6
      </span>
    </div>
  );
};

export default Pagenav;
