import { useCallback, useEffect, useState } from "react";
import "./Tag.scss";
const Tag = (props: {
  tag: string;
  type: number;
  width: number;
  height: number;
}) => {
  const { tag } = props;
  const tagColor = {
    1: "#0099FF",
    2: "#0066FF",
    3: "#00CCFF",
  };
  return (
    <div
      className="tagBox"
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        lineHeight: `${props.height}px`,
        backgroundColor: tagColor[props.type] || tagColor[1],
      }}
    >
      <div className="tagMes">{tag}</div>
    </div>
  );
};
export default Tag;
