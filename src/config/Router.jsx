import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Contactpage, Aboutpage } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
