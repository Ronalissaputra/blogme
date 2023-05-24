import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/AI";
import { HiOutlineMenuAlt4 } from "react-icons/HI";

const Headercomp = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className="h-16 top-0 sticky z-50 md:px-40 bg-white px-2 flex justify-between items-center">
        <div className="cursor-pointer">
          <p className="text-2xl">
            Nokturnal.<span className="text-orange-500 font-bold">Dev</span>
          </p>
        </div>
        <div className="md:flex hidden md:justify-between md:gap-5 cursor-pointer">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
          <p>help</p>
        </div>
        {open ? (
          <>
            <div
              className={`md:hidden transition-opacity duration-500 ease-linear bg-white cursor-pointer w-full min-h-screen absolute top-0 ${
                open ? "left-0" : "left-[600px]"
              } `}
            >
              <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 bg-slate-300 flex items-center justify-center rounded-full absolute right-0 m-4"
              >
                <AiOutlineCloseCircle className="text-2xl text-slate-700" />
              </button>
              <div className="flex items-center justify-center text-center">
                <div className="text-3xl mt-20 grid grid-rows-1">
                  <Link to="/" className="mb-8">
                    home
                  </Link>
                  <Link to="/about" className="mb-8">
                    about
                  </Link>
                  <Link to="/contact" className="mb-8">
                    contact
                  </Link>
                  <p className="mb-8">help</p>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <HiOutlineMenuAlt4 className="text-3xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Headercomp;
