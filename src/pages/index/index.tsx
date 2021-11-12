import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import UserCard from "../../components/UserCard/UserCard";
import TagList from "../../components/TagsList/TagsList";
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
    <div>
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
              id={value["id"]}
            ></Card>
          );
        })}
      </div>
      <UserCard></UserCard>
      <TagList></TagList>
    </div>
  );
};
export default Index;
