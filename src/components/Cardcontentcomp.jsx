import React, { useState } from "react";
import { frontends } from "../datadummy/frontenddata";
import { Link } from "react-router-dom";

const Cardcontentcomp = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 grid-cols-1">
      {frontends.map((item, index) => (
        <Link
          to={`/detail/${item.id}`}
          key={index}
          className={`w-full h-80 border-2 cursor-pointer flex items-center justify-center ${item.border} rounded-md lg:transition-transform lg:duration-300 lg:ease-in-out lg:transform lg:hover:scale-110`}
        >
          <div className="text-center">
            <item.logo className={`text-[100px] ${item.color}  w-full`} />
            <p className="text-2xl">{item.title}</p>
            <p>Belajar {item.title} dasar</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cardcontentcomp;
