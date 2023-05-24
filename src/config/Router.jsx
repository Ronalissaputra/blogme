import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Contactpage,
  Aboutpage,
  Detailpage,
  Helppage,
} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<Detailpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/help" element={<Helppage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
