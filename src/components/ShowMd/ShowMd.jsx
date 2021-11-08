import { useEffect, useState, useCallback } from "react";
import { getPassage } from "../../api/cardMes";
import "github-markdown-css/github-markdown.css";
import MarkdownIt from "markdown-it";
import "./ShowMd.scss";
const ShowMd = (props) => {
  const [passage, setPassage] = useState("");
  const [htmlPas, setHtmlPas] = useState("");
  const mdParser = new MarkdownIt();
  useEffect(() => {
    getPassage(props.passage).then((res) => {
      setPassage(res.data);
    });
  }, []);
  useEffect(() => {
    setHtmlPas(mdParser.render(passage));
  }, [passage]);

  return (
    <div style={{ height: "500px" }}>
      {/* <div value={passage} renderHTML={(text) => mdParse.render(text)} /> */}
      <div
        className="showHtml markdown-body"
        dangerouslySetInnerHTML={{ __html: htmlPas }}
      ></div>
    </div>
  );
};
export default ShowMd;
