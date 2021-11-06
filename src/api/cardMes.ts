import axios from "axios";
const baseURL = "http://localhost:8080/";
const request = axios.create({
  baseURL,
});
export const getCardDetails = () => {
  return request.get("/cardDetail");
};
