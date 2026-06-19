import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLocation, useNavigate } from "react-router-dom";

// Images
import heroImage1 from "/1.jpg";
import heroImage2 from "/2.jpg";
import heroImage3 from "/3.jpg";

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  const hero = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  useGSAP(
    () => {
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

      // Hero Text
      tl.to(".title", {
        opacity: 1,
        y: -30,
      })

        .to(".subtitle", {
          opacity: 1,
          y: -20,
        })

        // Exterior Zoom
        .to(".hero-image", {
          scale: 5,
          transformOrigin: "40% 75%",
        })

        .to(".hero-image", {
          opacity: 0,
        })

        // Living Room
        .to(
          ".living-image",
          {
            opacity: 1,
          },
          "<",
        )

        .to(".living-image", {
          scale: 1.5,
          transformOrigin: "50% 75%",
        })

        .to(".living-image", {
          opacity: 0,
        })

        // Bedroom
        .to(
          ".bedroom-image",
          {
            opacity: 1,
          },
          "<",
        )

        .to(".bedroom-image", {
          scale: 1.4,
          transformOrigin: "50% 70%",
        })

        // Bedroom Fade Out
        .to(".bedroom-image", {
          opacity: 0,
        })

        // Contact Screen
        .to(
          ".contact-screen",
          {
            opacity: 1,
          },
          "<",
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
          },
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
          },
        );

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    },
    {
      scope: hero,
      dependencies: [location.pathname],
      revertOnUpdate: true,
    },
  );

  return (
    <>
      <section ref={hero} className="relative h-screen overflow-hidden">
        {/* Exterior */}
        <img
          src={heroImage1}
          alt=""
          className="hero-image absolute inset-0 w-full h-full object-cover"
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center">
          <h1 className="title text-white text-5xl lg:5xl font-bold opacity-0">
            Modern Villa
          </h1>

          <p className="subtitle text-white text-xl mt-4 opacity-0">
            Where Architecture Meets Luxury
          </p>
        </div>

        {/* Living Room */}
        <img
          src={heroImage2}
          alt=""
          className="living-image absolute inset-0 w-full h-full object-cover opacity-0"
        />

        {/* Bedroom */}
        <img
          src={heroImage3}
          alt=""
          className="bedroom-image absolute inset-0 w-full h-full object-cover opacity-0"
        />

        {/* Final Contact Screen */}
        <div className="contact-screen absolute inset-0 bg-black flex flex-col justify-center items-center text-white opacity-0 z-20">
          <h2 className="contact-title text-5xl lg:text-7xl font-bold opacity-0 text-center md:text-2xl">
            AMARTYA ARCHITECTS
          </h2>

          <p className="mt-6 text-2xl text-center">
            Crafting Spaces, Creating Experiences
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="contact-btn mt-10 border border-white px-8 py-4 opacity-0 hover:bg-white hover:text-black transition-all duration-300"
          >
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* <div className="h-[200vh]" /> */}
      {/* <div className="h-screen bg-black"></div> */}
    </>
  );
}

export default Homepage;
