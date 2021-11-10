import { useEffect, useState, useCallback } from "react";
import { getPassage } from "../../api/cardMes";
import hljs from "highlight.js"; // 引入highlight.js库
import "highlight.js/styles/github.css"; // 引入github风格的代码高亮样式
import "github-markdown-css/github-markdown.css";
import MarkdownIt from "markdown-it";
import "./ShowMd.scss";
const ShowMd = (props) => {
  const [passage, setPassage] = useState("");
  const [htmlPas, setHtmlPas] = useState("");
  const [cardStyle, setCardStyle] = useState("none");
  const mdParser = new MarkdownIt({
    // 设置代码高亮的配置
    highlight: function (code, language) {
      if (language && hljs.getLanguage(language)) {
        try {
          return (
            `<pre><code class="hljs language-${language}">` +
            hljs.highlight(code, { language }).value +
            "</code></pre>"
          );
        } catch (__) {}
      }

      return (
        '<pre class="hljs"><code>' +
        mdParser.utils.escapeHtml(code) +
        "</code></pre>"
      );
    },
  });
  useEffect(() => {
    getPassage(props.passage).then((res) => {
      setPassage(res.data);
    });
  }, []);
  useEffect(() => {
    setHtmlPas(mdParser.render(passage));
  }, [passage]);

  return (
    <div
      onMouseEnter={() => {
        setCardStyle("0px 0px 50px #cccccc");
      }}
      onMouseMove={() => {}}
      onMouseLeave={() => {
        setCardStyle("none");
      }}
    >
      {/* <div value={passage} renderHTML={(text) => mdParse.render(text)} /> */}
      <div
        className="showHtml markdown-body"
        dangerouslySetInnerHTML={{ __html: htmlPas }}
        style={{ boxShadow: cardStyle }}
      ></div>
    </div>
  );
};
export default ShowMd;
