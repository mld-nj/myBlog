import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getPassageCounts } from "../../api/cardMes";
import { pageConfigStore } from "../../store/paginate";
import "./Paginate.scss";
const Paginate = () => {
  const [pageConfig, setPageConfig] = useRecoilState(pageConfigStore);
  useEffect(() => {
    getPassageCounts().then((res) => {
      setPageConfig({
        ...pageConfig,
        totalPage: Math.ceil((JSON.parse(res.data).sum / 4) * 1),
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
