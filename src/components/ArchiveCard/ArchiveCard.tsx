import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArchive } from "../../api/cardMes";
import "./ArchiveCard.scss";
const ArchiveItem = (props: any) => {
  const date = props.date.slice(0, 7);
  return (
    <Link to={`/archive/${date}`} className="itemContainer">
      <div className="itemDate">{date}</div>
      <div className="itemCounts">{props.count}</div>
    </Link>
  );
};
const ArchiveCard = () => {
  const [dateList, setDateList] = useState([]);
  useEffect(() => {
    getArchive().then((res) => {
      setDateList(JSON.parse(res.data));
    });
  }, []);
  return (
    <div className="archiveContainer">
      <div className="title">
        <div className="icon"></div>
        <div className="content">Archive</div>
      </div>
      <div className="archiveItemContainer">
        {dateList.map((value: { date: string; count: number }) => {
          return (
            <ArchiveItem date={value.date} count={value.count}></ArchiveItem>
          );
        })}
      </div>
    </div>
  );
};
export default ArchiveCard;
