import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getCardDetails } from "../../api/cardMes";
const Index = () => {
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
    <div className="cardList">
      {cardList.map((value) => {
        return (
          <Card
            title={value["name"]}
            date={value["date"]}
            key={value["id"]}
            tag={value["tag"]}
            type={value["type"]}
            detail={value["detail"]}
          ></Card>
        );
      })}
    </div>
  );
};
export default Index;
