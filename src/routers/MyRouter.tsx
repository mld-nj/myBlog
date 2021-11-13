import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Index from "../pages/Index/index";
import Passage from "../pages/Passage/Passage";
import TagPas from "../pages/TagPas/TagPas";
const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Index></Index>}></Route>
        <Route path={"/passage/:id"} element={<Passage></Passage>}></Route>
        <Route path={"/tagPas/:tagName"} element={<TagPas></TagPas>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;
