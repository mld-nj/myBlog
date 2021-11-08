import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Router } from "react-router";
import Index from "../pages/index/index";
import Passage from "../pages/Passage/Passage";
const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Index></Index>}></Route>
        <Route path={"/passage/:id"} element={<Passage></Passage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;
