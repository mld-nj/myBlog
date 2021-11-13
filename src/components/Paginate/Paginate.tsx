import { useState, useEffect } from "react";
import { getPassageCounts } from "../../api/cardMes";
import { getPagniatePas } from "../../api/cardMes";
import "./Paginate.scss";
const Paginate = () => {
  const [paginateConfig, setPaginateConfig] = useState({
    page: 1,
    pageSize: 4,
  });
  const [pageConfig, setPageConfig] = useState({
    currentPage: 1,
    totalPage: 3,
  });
  useEffect(() => {
    getPassageCounts().then((res) => {
      setPageConfig({
        ...pageConfig,
        totalPage: Math.ceil(
          (JSON.parse(res.data).sum / paginateConfig.pageSize) * 1
        ),
      });
    });
  }, []);
  return (
    <div className="paginateContainer">
      <div
        className="leftContainer"
        onClick={() => {
          if (pageConfig.currentPage !== 1) {
            setPageConfig({
              ...pageConfig,
              currentPage: pageConfig.currentPage - 1,
            });
          }
        }}
      ></div>
      <div className="middleContainer">
        <div className="currentContainer">{pageConfig.currentPage}</div>
        <div className="divideContainer">/</div>
        <div className="totalContainer">{pageConfig.totalPage}</div>
      </div>
      <div
        className="rightContainer"
        onClick={() => {
          if (pageConfig.currentPage < pageConfig.totalPage) {
            setPageConfig({
              ...pageConfig,
              currentPage: pageConfig.currentPage + 1,
            });
          }
        }}
      ></div>
    </div>
  );
};
export default Paginate;
