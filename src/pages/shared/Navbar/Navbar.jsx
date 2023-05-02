import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(null);
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
      className={`lg:px-16 z-20 px-4 bg-transparent py-2 flex items-center justify-between sticky top-0`}
    >
      <div className="logo">
        <h1 className="md:text-3xl text-2xl text-white" title="easy food">
          簡単料理
        </h1>
      </div>
      <div className={`flex grow items-center justify-between`}>
        <div className="flex gap-3 m-auto">
          <NavLink className="text-xl text-white" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl text-white" to="/blog">
            Blog
          </NavLink>
        </div>

        <div className="">
          <button className="bg-white px-3 py-2 rounded hover:cursor-pointer">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;