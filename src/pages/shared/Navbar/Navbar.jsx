import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 100) {
        setScrolled(1);
      } else {
        setScrolled(window.pageYOffset / 100);
      }
    };
  }, []);
  return (
    <div
      style={{ background: `rgba(0,0,0,${scrolled})` }}
      className={`lg:px-16 px-4 bg-transparent py-2 flex items-center justify-between sticky top-0`}
    >
      <div className="logo">
        <h1 className="text-3xl text-white" title="easy food">
          簡単料理
        </h1>
      </div>
      <div
        className={`md:flex md:flex-row md:relative md:top-0 grow items-center justify-between flex-col absolute top-12 -z-10 right-0 w-full sm:w-1/2 p-4 bg-black h-screen gap-3 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } transition-all`}
      >
        <div className="flex md:flex-row flex-col gap-3 m-auto">
          <NavLink className="text-xl text-white" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl text-white" to="/blog">
            Blog
          </NavLink>
        </div>

        <div className="md:mt-0 mt-3">
          <button className="bg-white px-3 py-2 rounded hover:cursor-pointer">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
      <div>
        {navOpen ? (
          <HiX
            onClick={() => setNavOpen(!navOpen)}
            style={{
              color: "white",
              height: "40px",
              width: "40px",
              cursor: "pointer",
            }}
            className="md:hidden block"
          />
        ) : (
          <FaBars
            onClick={() => setNavOpen(!navOpen)}
            style={{
              color: "white",
              height: "40px",
              width: "40px",
              cursor: "pointer",
            }}
            className="md:hidden sm:block"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
