import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
       className={`fixed top-0 left-0 w-full p-4 z-9999 transition-all duration-300 ${
    isHome ? "text-white " : " bg-black/5 backdrop-blur-xs shadow-md text"
  }`}
    >
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl nav-link">
          Amartya Architects
        </Link>

        <ul className="hidden md:flex gap-10">
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">The Studio</Link>
          </li>
          <li>
            <Link className="nav-link" to="/project">Projects</Link>
          </li>
           <li>
            <Link className="nav-link" to="/costCalculator">Cost Calculator</Link>
          </li>
          <li>
            <Link className="nav-link" to="/service">Services</Link>
          </li>
          <li>
            <Link className="nav-link" to="/vr">VR</Link>
            
          </li>
          <li>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-6 md:hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
