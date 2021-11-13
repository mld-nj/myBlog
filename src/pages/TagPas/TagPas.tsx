import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTagPas } from "../../api/cardMes";
import UserCard from "../../components/UserCard/UserCard";
import TagList from "../../components/TagsList/TagsList";
import Card from "../../components/Card/Card";
import "./TagPas.scss";
const TagPas = () => {
  const [mesList, setMesList] = useState([]);
  const tagName = useParams();
  //   const tagNameString =
  useEffect(() => {
    getTagPas(tagName.tagName).then((res) => {
      setMesList(JSON.parse(res.data));
    });
  }, [tagName]);
  return (
    <div>
      <div className="tagPasContainer">
        <div className="titleContainer">
          <div className="icon"></div>
          <div className="content">{tagName.tagName}</div>
        </div>
        <div className="cardList">
          {mesList.map((value) => {
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
      </div>
      <UserCard></UserCard>
      <TagList></TagList>
    </div>
  );
};
export default TagPas;
