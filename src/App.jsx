import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import About from "./pages/Aboutpage"
import Project from "./pages/Projectpage"
import Contact from "./pages/Contactpage"
import AnimatedSections from './pages/AnimatedSections'
import AnimatedNavar from "./components/navbar/AnimatedNavar";
import CostCalculator from "./pages/CostCalculator"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen  flex flex-col">
      <BrowserRouter>
        <Navbar className="z-50" />
         
        <main className="grow ">
        <Routes>
         <Route path="/" element={<AnimatedNavar />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/costCalculator" element={<CostCalculator />} />
          {/* <Route path="/AnimatedSections" element={<AnimatedSections />} /> */}
         
        </Routes>
        </main>
        {/* <AnimatedNavar/> */}
        {/* <Footer  className="z-50" /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
