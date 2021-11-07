import { useCallback, useEffect, useState } from "react";
// import { markdown } from "markdown";
import Tag from "../Tag/Tag";
import { cardMes } from "../../interfaces/card";
import { getPassage } from "../../api/cardMes";
import bg from "../../assets/orb-blue.svg";
import "./Card.scss";
const Card = (props: cardMes) => {
  const { date, title, detail } = props;
  const [cardStyle, setCardStyle] = useState("none");
  const [blog, setBlog] = useState("");
  const dateSlice = date.slice(0, 10);
  const getBlog = useCallback(() => {
    console.log(props.id);
    getPassage(props.id).then((res) => {
      setBlog(res.data);
      console.log(res.data);
    });
  }, []);
  useEffect(() => {
    console.log(blog);
  }, [blog]);
  return (
    <div
      className="cardBox"
      onMouseEnter={() => {
        setCardStyle("0px 0px 50px #cccccc");
      }}
      onMouseMove={() => {}}
      onMouseLeave={() => {
        setCardStyle("none");
      }}
      style={{ boxShadow: cardStyle }}
      onClick={getBlog}
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
    </div>
  );
};
export default Card;
