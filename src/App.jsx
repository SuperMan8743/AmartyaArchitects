import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// page
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/Aboutpage";
import Project from "./pages/Projectpage";
import Contact from "./pages/Contactpage";

// import AnimatedSections from './pages/AnimatedSections'
import AnimatedNavar from "./components/navbar/AnimatedNavar";
import CostCalculator from "./pages/CostCalculator";
import ServicePage from "./pages/ServicePage";
import VrPage from "./pages/VrPage";
function App() {
  const [count, setCount] = useState(0);
  
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div className="min-h-screen text-white bg-[#0c141d] flex flex-col">

      <BrowserRouter>
        {/* <ScrollToTop /> */}

        <Navbar className="z-50" />
        <main className="grow ">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/costCalculator" element={<CostCalculator />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/vr" element={<VrPage />} />
          </Routes>
        </main>
        {/* <AnimatedNavar/> */}
        {/* <Footer className="z-50" /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
