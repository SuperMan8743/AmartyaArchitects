import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* <img className="h-[300px]" src="https://images.squarespace-cdn.com/content/v1/542032d5e4b0968055ce5118/1590821174418-EN1TWKVGTXP9AAVN7NDI/image-asset.jpeg" alt="" /> */}
      {/* <nav className=" text-white p-4  mt-o sticky top-0 z-[9999]"> */}
      <nav className="fixed top-0 left-0 w-full text-white p-4 z-[9999]">
        <div className="flex justify-between items-center ">
          <Link to="/" className="text-2xl">
          {/* <img src="**" alt="" /> */}
            Amartya Architects
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">The Studio</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
           
             <li>
              <Link to="/contact">Services</Link>
            </li>
            <li>
              <Link to="/contact">Experience Vs</Link>
            </li>
            <li>
              <Link to="/costCalculator"> Cost Calculator</Link>
            </li>
           
            
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
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
    </>
  );
}

export default Navbar;
