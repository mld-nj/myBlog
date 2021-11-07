import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from "react-router";
import Index from "../pages/index/index";
const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Index></Index>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;
