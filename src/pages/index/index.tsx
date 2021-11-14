import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import UserCard from "../../components/UserCard/UserCard";
import TagList from "../../components/TagsList/TagsList";
import Paginate from "../../components/Paginate/Paginate";
import TimeAxis from "../../components/TimeAxis/TimeAxis";
import ArchiveCard from "../../components/ArchiveCard/ArchiveCard";
import { useRecoilState } from "recoil";
import { pageConfigStore } from "../../store/paginate";
import { getCardDetails, getPagniatePas } from "../../api/cardMes";
import "./index.scss";
const Index = () => {
  const [cardList, setCardList] = useState([]);
  const [pageConfig, setPageConfig] = useRecoilState(pageConfigStore);
  useEffect(() => {
    // getCardDetails().then((res) => {
    //   setCardList(JSON.parse(res.data));
    // });
    getPagniatePas(pageConfig.currentPage, 4).then((res) => [
      setCardList(JSON.parse(res.data)),
    ]);
  }, [pageConfig]);
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
      <div className="leftBox">
        <UserCard></UserCard>
        <TagList></TagList>
        <ArchiveCard></ArchiveCard>
      </div>

      <Paginate></Paginate>
      <TimeAxis></TimeAxis>
    </div>
  );
};
export default Index;
