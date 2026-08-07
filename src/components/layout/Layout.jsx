import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Homepage from "../../pages/Homepage";
import About from "../../pages/Aboutpage";
import Project from "../../pages/Projectpage";
import Contact from "../../pages/Contactpage";
import CostCalculator from "../../pages/CostCalculator";
import ServicePage from "../../pages/ServicePage";
import VrPage from "../../pages/VrPage";
import SingleProjectPage from "../../pages/SingleProjectPage";
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage";
import TermConditionPage from "../../pages/TermConditionPage";
import CareerPage from "../../pages/CareerPage";
import NotFoundPage from "../../pages/NotFoundPage";


import { getSiteSettings } from "../../api/api";
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
const [siteSettings, setSiteSettings] = useState(null);

 useEffect(() => {
  async function loadSettings() {
    const data = await getSiteSettings();
    setSiteSettings(data);
  }

  loadSettings();
}, []);
  return (
    <>
    <ScrollToTop />
        <Navbar siteSettings={siteSettings} />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:slug" element={<SingleProjectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/costCalculator" element={<CostCalculator />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/vr" element={<VrPage />} /> 
          <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
          <Route path="/termsCondition" element={<TermConditionPage />} />
          <Route path="/career" element={<CareerPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isHome && <Footer siteSettings={siteSettings} />}
    </>
  );
}

export default Layout;
