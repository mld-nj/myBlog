import { useEffect, useState } from "react";
import Tag from "../Tag/Tag";
import { getAllTag } from "../../api/cardMes";
import "./TagsList.scss";
const TagList = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getAllTag().then((res) => {
      setTags(JSON.parse(res.data));
    });
  }, []);
  function randomNum(minNum: number, maxNum: number) {
    switch (arguments.length) {
      case 1:
        return Math.random() * minNum + 1;
        break;
      case 2:
        return Math.random() * (maxNum - minNum + 1) + minNum;
        break;
      default:
        return 0;
        break;
    }
  }
  return (
    <div className="tagsListBox">
      {tags.map((value: any) => {
        return (
          <Tag
            tag={value.tagName}
            type={value.type}
            width={randomNum(65, 95)}
            height={randomNum(30, 45)}
          ></Tag>
        );
      })}
    </div>
  );
};
export default TagList;
