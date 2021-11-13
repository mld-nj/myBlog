import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPassageCounts, getKindCounts } from "../../api/cardMes";
import "./UserCard.scss";
const UserCard = () => {
  const [pageNum, setPageNum] = useState({ passgae: 0, kind: 0 });
  const [cardStyle, setCardStyle] = useState("0px 0px 10px #cccccc");
  useEffect(() => {
    getPassageCounts().then((pRes) => {
      getKindCounts().then((kRes) => {
        setPageNum({
          passgae: JSON.parse(pRes.data).sum,
          kind: JSON.parse(kRes.data).total,
        });
      });
    });
  }, []);
  return (
    <div
      className="userCardBox"
      onMouseEnter={() => {
        setCardStyle("0px 0px 50px #cccccc");
      }}
      onMouseLeave={() => {
        setCardStyle("0px 0px 10px #cccccc");
      }}
      style={{ boxShadow: cardStyle }}
    >
      <Link to={"/"} className="pic">
        <div className="picBox"></div>
      </Link>
      <div className="name">前端小孟</div>
      <div className="blogInfo">
        <div className="passages">
          <div className="title">文章</div>
          <div className="counts">{pageNum.passgae}</div>
        </div>
        <div className="tags">
          <div className="title">标签</div>
          <div className="counts">{pageNum.kind}</div>
        </div>
      </div>
      <a href="https://github.com/mld-nj" target="_blank" className="contact">
        <div className="icon"></div>
        <div className="content">Contact me</div>
      </a>
    </div>
  );
};
export default UserCard;
