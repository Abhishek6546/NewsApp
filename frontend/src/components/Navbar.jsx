import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Categories", path: "/categories" },
    { id: 3, text: "About Us", path: "/about" },
    { id: 4, text: "Contact", path: "/contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed bg-slate-200 top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
         
          <h1 className="font-semibold text-xl text-slate-800 cursor-pointer">
            Newsify
            <p className="text-sm text-slate-500">Stay Informed</p>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text, path }) => (
              <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                <Link to={path} className="text-slate-700 hover:text-teal-500">
                  {text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="text-teal-500 border border-teal-500 px-4 py-1 rounded hover:bg-teal-100"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-white bg-teal-500 px-4 py-1 rounded hover:bg-teal-600"
              >
                Signup
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu Toggle */}
          <div onClick={() => setMenu(!menu)} className="md:hidden text-slate-800">
            {menu ? "X" : "☰"}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="bg-white shadow-md">
          <ul className="md:hidden flex flex-col items-center justify-start h-screen space-y-4 pt-10 text-xl">
            {navItems.map(({ id, text, path }) => (
              <li key={id}>
                <Link
                  to={path}
                  onClick={() => setMenu(false)}
                  className="text-slate-700 hover:text-teal-500"
                >
                  {text}
                </Link>
              </li>
            ))}
            {/* Mobile Login/Signup */}
            <li>
              <Link
                to="/login"
                onClick={() => setMenu(false)}
                className="text-teal-500 px-4 py-2 rounded border border-teal-500 hover:bg-teal-100 "
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                onClick={() => setMenu(false)}
                className="text-white bg-teal-500 px-3 py-2 rounded hover:bg-teal-600"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
