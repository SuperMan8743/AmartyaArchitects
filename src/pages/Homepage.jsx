import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

import { getHomePage } from "../api/api";

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  const hero = useRef(null);
  const navigate = useNavigate();

  const [homeData, setHomeData] = useState(null);

  // -------------------------
  // Load Home Data
  // -------------------------
  useEffect(() => {
    async function loadHomePage() {
      const data = await getHomePage();

      console.log("API DATA =>", data);

      // preload images
      Object.values(data.heroImages).forEach((src) => {
        const img = new Image();
        img.src = src;
      });

      setHomeData(data);
    }

    loadHomePage();
  }, []);

  // -------------------------
  // GSAP
  // -------------------------
  useGSAP(
    () => {
      if (!homeData) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero.current,
          start: "top top",
          end: "+=5000",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.to(".title", {
        opacity: 1,
        y: -30,
      })

        .to(".subtitle", {
          opacity: 1,
          y: -20,
        })

        .to(".hero-image", {
          scale: 5,
          transformOrigin: "40% 75%",
        })

        .to(".hero-image", {
          opacity: 0,
        })

        .to(
          ".living-image",
          {
            opacity: 1,
          },
          "<"
        )

        .to(".living-image", {
          scale: 1.5,
          transformOrigin: "50% 75%",
        })

        .to(".living-image", {
          opacity: 0,
        })

        .to(
          ".bedroom-image",
          {
            opacity: 1,
          },
          "<"
        )

        .to(".bedroom-image", {
          scale: 1.4,
          transformOrigin: "50% 70%",
        })

        .to(".bedroom-image", {
          opacity: 0,
        })

        .to(
          ".contact-screen",
          {
            opacity: 1,
          },
          "<"
        )

        .fromTo(
          ".contact-title",
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
          }
        )

        .fromTo(
          ".contact-btn",
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
          }
        );

      ScrollTrigger.refresh();

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    {
      scope: hero,
      dependencies: [homeData],
      revertOnUpdate: true,
    }
  );

  // -------------------------
  // Loading
  // -------------------------

  if (!homeData) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  // -------------------------
  // UI
  // -------------------------

  return (
    <section ref={hero} className="relative h-screen overflow-hidden">

      {/* Hero */}
      <img
        src={homeData.heroImages.img1}
        alt=""
        className="hero-image absolute inset-0 w-full h-full object-cover"
      />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center">
        <h1 className="title text-white text-5xl lg:text-7xl font-bold opacity-0">
          {homeData.heroTitle}
        </h1>

        <p className="subtitle text-white text-xl mt-4 opacity-0">
          {homeData.heroSubtitle}
        </p>
      </div>

      {/* Living */}
      <img
        src={homeData.heroImages.img2}
        alt=""
        className="living-image absolute inset-0 w-full h-full object-cover opacity-0"
      />

      {/* Bedroom */}
      <img
        src={homeData.heroImages.img3}
        alt=""
        className="bedroom-image absolute inset-0 w-full h-full object-cover opacity-0"
      />

      {/* Contact */}
      <div className="contact-screen absolute inset-0 bg-black flex flex-col justify-center items-center text-white opacity-0 z-20">
        <h2 className="contact-title text-6xl font-bold opacity-0 uppercase">
          {homeData.companyName}
        </h2>

        <p className="mt-6 text-2xl capitalize">
          {homeData.companyTagLine}
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="contact-btn mt-10 border border-white px-8 py-4 opacity-0 hover:bg-white hover:text-black transition"
        >
          Schedule Consultation
        </button>
      </div>
    </section>
  );
}

export default Homepage;