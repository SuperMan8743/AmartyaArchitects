import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className=" min-h-[400px] bg-fill bg-center bg-no-repeat
  bg-[url('/footer.jpg')] flex
    flex-col
    justify-center
    items-center"
    >
      <ul className="text-center text-white py-auto bold">
        <li className="text-2xl text-center">Don't Wait </li>
        <li className="text-5xl">Start Buidling Today</li>
      </ul>
      <nav className="flex flex-row justify-center">
        <section >
          <ul className="flex flex-row gap-4 mt-6  text-white">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </section>
        <section></section>
      </nav>
    </footer>
  );
}

export default Footer;
