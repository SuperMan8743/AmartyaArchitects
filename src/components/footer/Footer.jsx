import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import SocialIcons from "../socialMedia/SocialIcons";
import { getContactPage } from "../../api/api";
function Footer() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    async function loadContact() {
      const data = await getContactPage();
      setContactData(data);
    }

    loadContact();
  }, []);
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
                Privacy Policy{" "}
              </Link>
            </li>
            <li>
              <Link className="text-hover" to="/about">
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
          <h1 className="text-4xl my-4 text-hover">Reach Us</h1>

          {contactData && (
            <div className="space-y-5">
              {/* Phone */}

              <a
                href={`tel:${contactData.info.phone}`}
                className="flex items-center gap-4 text-hover"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <span>{contactData.info.phone}</span>
              </a>

              {/* Email */}

              <a
                href={`mailto:${contactData.info.email}`}
                className="flex items-center gap-4 text-hover"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <span>{contactData.info.email}</span>
              </a>

              {/* Address */}

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>

                <span className="text-gray-300 leading-7 max-w-xs">
                  {contactData.info.address}
                </span>
              </div>
            </div>
          )}
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
