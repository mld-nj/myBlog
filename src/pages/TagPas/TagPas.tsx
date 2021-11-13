import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTagPas } from "../../api/cardMes";
import Card from "../../components/Card/Card";
const TagPas = () => {
  const [mesList, setMesList] = useState([]);
  const tagName = useParams();
  const tagNameString = String(tagName);
  useEffect(() => {
    getTagPas(tagNameString).then((res) => {
      setMesList(JSON.parse(res.data));
    });
  }, []);
  return (
    <div className="tagPasContainer">
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
  );
};
export default TagPas;
