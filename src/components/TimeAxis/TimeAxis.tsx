import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TimeAxis.scss";
const PasNodeItem = () => {
  return (
    <div className="nodeItemContainer">
      <div className="circle"></div>
      <div className="time">2021 / 11 / 01</div>
      <div className="divide"></div>
      <Link className="title" to={`/passage`}>
        hhh
      </Link>
    </div>
  );
};
const TimeAxis = () => {
  return (
    <div className="timeAxisContainer">
      <div className="pasNodeContainer">
        <PasNodeItem></PasNodeItem>
        <PasNodeItem></PasNodeItem>
        <PasNodeItem></PasNodeItem>
      </div>
    </div>
  );
};
export default TimeAxis;
