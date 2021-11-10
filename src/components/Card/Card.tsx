import { useCallback, useEffect, useState } from "react";
// import { markdown } from "markdown";
import Tag from "../Tag/Tag";
import { cardMes } from "../../interfaces/card";
import { Link } from "react-router-dom";
import bg from "../../assets/orb-blue.svg";
import "./Card.scss";
const Card = (props: cardMes) => {
  const { date, title, detail } = props;
  const [cardStyle, setCardStyle] = useState("0px 0px 10px #cccccc");
  const [blog, setBlog] = useState("");
  const dateSlice = date.slice(0, 10);
  const showPassage = useCallback(() => {}, []);
  useEffect(() => {
    console.log(blog);
  }, [blog]);
  return (
    <Link
      to={`/passage/${props.id}`}
      className="cardBox"
      onMouseEnter={() => {
        setCardStyle("0px 0px 50px #cccccc");
      }}
      onMouseMove={() => {}}
      onMouseLeave={() => {
        setCardStyle("0px 0px 10px #cccccc");
      }}
      style={{ boxShadow: cardStyle }}
      onClick={showPassage}
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
            "translateX(100px) translateY(-130px) scale(1.00547) translateZ(0px)",
        }}
      >
        <img src={bg} alt="" />
      </div>
    </Link>
  );
};
export default Card;
