import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCardDetails } from "../../api/cardMes";
import "./TimeAxis.scss";
const PasNodeItem = (props: any) => {
  return (
    <div className="nodeItemContainer">
      <div className="circle"></div>
      <div className="icon"></div>
      <div className="time">{props.date.slice(0, 10)}</div>
      <div className="divide"></div>
      <Link className="title" to={`/passage/${props.id}`}>
        {props.title}
      </Link>
    </div>
  );
};
const TimeAxis = () => {
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    getCardDetails().then((res) => {
      setCardList(JSON.parse(res.data));
    });
  }, []);
  useEffect(() => {
    console.log(cardList);
  }, [cardList]);
  return (
    <div className="timeAxisContainer">
      <div className="pasNodeContainer">
        {cardList.map((value: any) => {
          return (
            <PasNodeItem
              date={value.date}
              title={value.name}
              key={value.id}
              id={value.id}
            ></PasNodeItem>
          );
        })}
      </div>
    </div>
  );
};
export default TimeAxis;
