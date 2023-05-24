import React from "react";
import Headercomp from "./Headercomp";

const Layout = (props) => {
  return (
    <>
      <Headercomp />
      <div className="lg:px-40 px-2">{props.children}</div>
    </>
  );
};

export default Layout;
