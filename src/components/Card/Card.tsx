import React, { useCallback, useEffect, useState } from "react";
import Tag from "../Tag/Tag";
import { cardMes } from "../../interfaces/card";
import "./Card.scss";
const Card = (props: cardMes) => {
  const { date, title } = props;
  const dateSlice = date.slice(0, 10);
  return (
    <div className="cardBox">
      <div className="cardTitle">{title}</div>
      <div className="cardDetail">
        <div className="cardDate">{dateSlice}</div>
        <div className="cardTag">
          <Tag tag={props.tag} type={props.type}></Tag>
        </div>
      </div>
      <div className="cardImg">
        <img src="../../assets/orb-blue.svg" alt="" />
      </div>
    </div>
  );
};
export default Card;
