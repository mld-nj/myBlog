import axios from "axios";
const baseURL = "http://localhost:8080/";
const request = axios.create({
  baseURL,
});
export const getCardDetails = () => {
  return request.get("/cardDetail");
};
export const getTags = () => {
  return request.get("/tags");
};
export const getPassage = (id: any) => {
  return request.get("/blog", {
    params: {
      id: id,
    },
  });
};
export const getPassageCounts = () => {
  return request.get("/passageCounts");
};
export const getKindCounts = () => {
  return request.get("/tagKinds");
};
//获取所有文章的不同tag
export const getAllTag = () => {
  return request.get("/tagName");
};
//获取每个标签对应的文章
export const getTagPas = (tagName: string) => {
  return request.get("/tagPas", {
    params: {
      tagName,
    },
  });
};
