import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-6">

      <div className="flex justify-between items-center">

        <Link to="/" className="text-2xl">
          Amartya Architects
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
      {
        menuOpen && (
          <ul className="flex flex-col gap-4 mt-6 md:hidden">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        )
      }

    </nav>
  );
}

export default Navbar;