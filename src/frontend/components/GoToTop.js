import React from "react";
import up from "../image/up.png";
const GoToTop = () => {

  const GoToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div className="top-btn" onClick={GoToBtn}>
      <img src={up} alt=" " className="top-btn-img"></img>
    </div>
  );
};

export default GoToTop;
