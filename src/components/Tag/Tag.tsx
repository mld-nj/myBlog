import { useCallback, useEffect, useState } from "react";
import "./Tag.scss";
const Tag = (props: { tag: string; type: number }) => {
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
        backgroundColor: tagColor[props.type],
      }}
    >
      <div className="tagMes">{tag}</div>
    </div>
  );
};
export default Tag;
