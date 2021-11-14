import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTagPas } from "../../api/cardMes";
import UserCard from "../../components/UserCard/UserCard";
import TagList from "../../components/TagsList/TagsList";
import TimeAxis from "../../components/TimeAxis/TimeAxis";
import ArchiveCard from "../../components/ArchiveCard/ArchiveCard";
import "./ArchivePage.scss";
const ArchivePage = () => {
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
      <div className="archivePageContainer">
        <div className="titleContainer">
          <div className="icon"></div>
          <div className="content">Archive</div>
        </div>
        <TimeAxis></TimeAxis>
      </div>
      <div className="leftBox">
        <UserCard></UserCard>
        <TagList></TagList>
        <ArchiveCard></ArchiveCard>
      </div>
    </div>
  );
};
export default ArchivePage;
