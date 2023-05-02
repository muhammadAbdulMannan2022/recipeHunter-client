import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/Authprovider";

const Navbar = () => {
  const logcation = useLocation();
  const { logOut, user, loading } = useContext(AuthContext);
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
      style={{
        background: `${
          location.pathname === "/1/signup" || logcation.pathname === "/1/login"
            ? "rgb(0,0,0)"
            : `rgba(0,0,0,${scrolled})`
        }`,
      }}
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

        <div className="flex gap-1">
          <div style={{ width: "40px", height: "40px" }}>
            {loading ? (
              ""
            ) : user?.photoURL ? (
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
              />
            ) : (
              <FaUserCircle
                className="text-white"
                style={{ width: "40px", height: "40px" }}
              />
            )}
          </div>
          <button className="bg-white px-3 py-2 rounded hover:cursor-pointer">
            {user ? (
              <span onClick={logOut}>Log out</span>
            ) : (
              <Link to="/1/login">Login</Link>
            )}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
