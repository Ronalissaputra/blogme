import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/all";
import { HiOutlineMenuAlt4 } from "react-icons/all";
import { useNavigate } from "react-router-dom";

const Headercomp = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const fixedNav = window.pageYOffset;
      setScrollUp(fixedNav > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={`h-20 top-0 sticky z-50 md:px-40 bg-white px-2 flex justify-between items-center ${
          scrollUp
            ? "border-b backdrop-blur-md bg-white/40 border-slate-500"
            : ""
        }`}
      >
        <div className="cursor-pointer">
          <p className="text-2xl">
            Nokturnal.<span className="text-orange-500 font-bold">Dev</span>
          </p>
        </div>
        <div className="md:flex hidden md:justify-between md:gap-5 cursor-pointer items-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-orange-600" : ""
            }
          >
            home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-orange-600" : ""
            }
          >
            about
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-orange-600" : ""
            }
          >
            contact
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-orange-600" : ""
            }
          >
            help
          </NavLink>
          <button
            onClick={() => navigate("/masuk")}
            className="border-2 border-orange-500 hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md"
          >
            Masuk
          </button>
          <button
            onClick={() => navigate("/daftar")}
            className="border-2 border-orange-500 hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md"
          >
            Daftar
          </button>
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
                <div className="text-3xl mt-20 grid grid-rows-1 gap-10">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "" : isActive ? "text-orange-600" : ""
                    }
                  >
                    home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending ? "" : isActive ? "text-orange-600" : ""
                    }
                  >
                    about
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                      isPending ? "" : isActive ? "text-orange-600" : ""
                    }
                  >
                    contact
                  </NavLink>
                  <NavLink
                    to="/help"
                    className={({ isActive, isPending }) =>
                      isPending ? "" : isActive ? "text-orange-600" : ""
                    }
                  >
                    help
                  </NavLink>
                  <button
                    onClick={() => navigate("/masuk")}
                    className="border-2 border-orange-500 hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md"
                  >
                    Masuk
                  </button>
                  <button
                    onClick={() => navigate("/daftar")}
                    className="border-2 border-orange-500 hover:bg-orange-500 hover:text-white py-2 px-4 rounded-md"
                  >
                    Daftar
                  </button>
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
      </nav>
    </>
  );
};

export default Headercomp;
