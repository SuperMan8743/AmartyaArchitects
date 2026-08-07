import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import SocialIcons from "../socialMedia/SocialIcons";

function Footer({ siteSettings }) {

  return (
    <footer className="border-t inset-shadow-2xs ">
      <div className="flex flex-col mx-10 md:mx-0 md:flex-row md:justify-around ">
        {/* Quick Links */}
        <section>
          <ul>
            <h1 className="text-4xl my-4 text-hover">Quick Links</h1>

            <li>
              <Link className="text-hover" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-hover" to="/about">
                The Studio
              </Link>
            </li>
            <li>
              <Link className="text-hover" to="/project">
                Projects
              </Link>
            </li>
            <li>
              <Link className="text-hover" to="/costCalculator">
                Cost Calculator
              </Link>
            </li>
            <li>
              <Link className="text-hover" to="/service">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-hover" to="/vr">
                VR
              </Link>
            </li>
            <li>
              <Link className="text-hover" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </section>
        {/* Important Links */}
        <section>
          <ul>
            <h1 className="text-4xl my-4 text-hover">Important Links</h1>

            <li>
              <Link className="text-hover" to="privacyPolicy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-hover" to="/termsCondition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="text-hover" to="/career">
                Career
              </Link>
            </li>
            <li>
              <Link className="text-hover" to="/costCalculator">
                Cost Calculator
              </Link>
            </li>
            <div className="flex gap-5 my-2">
              <SocialIcons name="instagram" href={siteSettings?.instagram} />

              <SocialIcons name="pinterest" href={siteSettings?.pinterest} />

              <SocialIcons name="youtube" href={siteSettings?.youtube} />
            </div>
          </ul>
        </section>
        {/* Reach Us */}
     <section>
  <h1 className="text-4xl my-4 text-hover">Reach Us</h1>

  <div className="space-y-5">
    <a
      href={`tel:${siteSettings?.phone}`}
      className="flex items-center gap-4 text-hover"
    >
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <FaPhoneAlt />
      </div>

      <span>{siteSettings?.phone}</span>
    </a>

    <a
      href={`mailto:${siteSettings?.email}`}
      className="flex items-center gap-4 text-hover"
    >
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <FaEnvelope />
      </div>

      <span>{siteSettings?.email}</span>
    </a>

    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
        <FaMapMarkerAlt />
      </div>

      <span className="text-gray-300 leading-7 max-w-xs">
        {siteSettings?.address}
      </span>
    </div>
  </div>
</section>
      </div>
      <div>
        <p className="text-gray-500 text-sm">{siteSettings?.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
