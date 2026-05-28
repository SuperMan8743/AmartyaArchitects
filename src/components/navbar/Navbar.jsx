import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-between p-8 bg-black text-white h-full">
        <div>
          <a href="logo basis=30">
            <img src="../../assets/logo.png" alt="" srcset="" />
            Amartya Architects
          </a>
        </div>
        <div>
          <ul className="flex flex-row gap-10 flex-wrap">
            <li >
              <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
