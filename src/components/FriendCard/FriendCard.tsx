import { useEffect, useState } from "react";
import { getFriens } from "../../api/cardMes";
import "./FriendCard.scss";
const FriendItem = (props: any) => {
  return (
    <a href={props.link} target="_blank" className="itemContainer">
      <div className="itemDate">{props.name}</div>
      <div className="itemCounts"></div>
    </a>
  );
};
const FriendCard = () => {
  const [friendList, setFriendList] = useState([]);
  useEffect(() => {
    getFriens().then((res) => {
      setFriendList(JSON.parse(res.data));
    });
  });
  return (
    <div className="friendContainer">
      <div className="title">
        <div className="icon"></div>
        <div className="content">Friends</div>
      </div>
      <div className="friendItemContainer">
        {friendList.map((value: any) => {
          return (
            <FriendItem
              name={value.name}
              link={value.link}
              key={value.id}
            ></FriendItem>
          );
        })}
      </div>
    </div>
  );
};
export default FriendCard;
