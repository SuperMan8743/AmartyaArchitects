import { Routes, Route, useLocation } from "react-router-dom";
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
import CareerPage from "../../pages/CareerPage";
import NotFoundPage from "../../pages/NotFoundPage";
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
    <ScrollToTop />
      <Navbar />

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
          <Route path="/career" element={<CareerPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isHome && <Footer />}
    </>
  );
}

export default Layout;
