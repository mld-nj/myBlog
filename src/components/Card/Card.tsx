import { useCallback, useEffect, useState } from "react";
import Tag from "../Tag/Tag";
import { cardMes } from "../../interfaces/card";
import bg from "../../assets/orb-blue.svg";
import "./Card.scss";
const Card = (props: cardMes) => {
  const { date, title, detail } = props;
  const [cardStyle, setCardStyle] = useState("none");
  const dateSlice = date.slice(0, 10);

  return (
    <div
      className="cardBox"
      onMouseEnter={() => {
        setCardStyle("0px 0px 50px #cccccc");
      }}
      onMouseLeave={() => {
        setCardStyle("none");
      }}
      style={{ boxShadow: cardStyle }}
    >
      <div className="cardTitle">{title}</div>
      <div className="cardDetail">
        <div className="cardDate">{dateSlice}</div>
        <div className="cardTag">
          <Tag tag={props.tag} type={props.type}></Tag>
        </div>
        <div className="cardMes">{detail}</div>
      </div>
      <div
        className="cardImg"
        style={{
          transform:
            "translateX(80px) translateY(-130px) scale(1.00547) translateZ(0px)",
        }}
      >
        <img src={bg} alt="" />
      </div>
    </div>
  );
};
export default Card;
