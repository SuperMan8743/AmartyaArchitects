import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "../socialMedia/SocialIcons";
// icons
// import { FaInstagram, FaYoutube,FaPinterest } from "react-icons/fa";
function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="border-t inset-shadow-2xs ">
      <div className="flex justify-around ">
        {/* Quick Links */}
        <section>
          <ul >
            <h1 className="text-4xl my-4 text-hover">Quick Links</h1>

            <li>
              <Link className="text-hover" to="/" >Home</Link>
            </li>
            <li>
              <Link className="text-hover" to="/about">The Studio</Link>
            </li>
            <li>
              <Link className="text-hover" to="/project" >Projects</Link>
            </li>
            <li>
              <Link className="text-hover" to="/costCalculator">Cost Calculator</Link>
            </li>
            <li>
              <Link className="text-hover"  to="/service">Services</Link>
            </li>
            <li>
              <Link className="text-hover" to="/vr">VR</Link>
            </li>
            <li>
              <Link className="text-hover" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </section>
        {/* Important Links */}
        <section>
          <ul>
            <h1 className="text-4xl my-4">Important Links</h1>

            <li>
              <Link className="text-hover"  to="/" >Privacy Policy </Link>
            </li>
            <li>
              <Link className="text-hover" to="/about">Terms & Conditions</Link>
            </li>
            <li>
              <Link className="text-hover" to="/project">Career</Link>
            </li>
            <li>
              <Link className="text-hover" to="/costCalculator">Cost Calculator</Link>
            </li>
            <div className="flex gap-5 my-2">
              <SocialIcons
                name="instagram"
                href="https://instagram.com/amartyaarchitects"
              />

              <SocialIcons
                name="pinterest"
                href="https://in.pinterest.com/amartyaarchitects/"
              />

              <SocialIcons
                name="youtube"
                href="https://youtube.com/@amartyaarchitects"
              />
            </div>
          </ul>
        </section>
        {/* Reach Us */}
        <section>
          <ul>
            <h1 className="text-4xl my-4 text-hover">Reach Us</h1>

            <li>
              <Link className="text-hover" to="/"> </Link>
            </li>
            <li>
              <Link className="text-hover" to="/about">Terms & Conditions</Link>
            </li>
            <li>
              <Link className="text-hover" to="/project">Career</Link>
            </li>
            <li>
              <Link className="text-hover" to="/costCalculator">Cost Calculator</Link>
            </li>
          </ul>
        </section>
      </div>
      <div>
        <p className="text-gray-500 text-sm">
          © 2026 Amartya Architects. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
