import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Contactpage,
  Aboutpage,
  Detailpage,
  Helppage,
} from "../pages";
import { Loginformcomp, Registerformcomp } from "../components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<Detailpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/help" element={<Helppage />} />
        <Route path="/masuk" element={<Loginformcomp />} />
        <Route path="/daftar" element={<Registerformcomp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
