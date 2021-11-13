import { atom } from "recoil";

export const pageConfigStore = atom({
  key: "pageConfigStore",
  default: {
    currentPage: 1,
    totalPage: 3,
  },
});
