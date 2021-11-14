import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Index from "../pages/Index";
import Passage from "../pages/Passage/Passage";
import TagPas from "../pages/TagPas/TagPas";
import ArchivePage from "../pages/ArchivePas/ArchivePage";
const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Index></Index>}></Route>
        <Route path={"/passage/:id"} element={<Passage></Passage>}></Route>
        <Route path={"/tagPas/:tagName"} element={<TagPas></TagPas>}></Route>
        <Route
          path={"/archive/:date"}
          element={<ArchivePage></ArchivePage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;
