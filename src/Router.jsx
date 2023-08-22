import { Route, Routes } from "react-router-dom";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";

const Router = () => {
  return (
    <Routes>
      <Route path='/page1' element={<Page1 />} />
      <Route path='/page2' element={<Page2 />} />
    </Routes>
  );
};
export default Router;
