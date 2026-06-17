import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";
import heroImage1 from "/1.png";
import heroImage2 from "/2.jpg";
import heroImage3 from "/3.jpg";

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
 
  const hero = useRef();
const location = useLocation();
  useGSAP(
    
    () => {
      
 const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero.current,
          start: "top top",
          end: "+=7000",
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
          "<",
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
          "<",
        )
        .to(".bedroom-image", {
          scale: 1.4,
          transformOrigin: "50% 70%",
        });
        requestAnimationFrame(() => {
  ScrollTrigger.refresh();
})
    },
    { scope: hero, dependencies:[location.pathname],revertOnUpdate:true },
  
  );

  return (
    <>
      <section ref={hero} className="hero relative h-screen overflow-hidden">
        <img
          src={heroImage1}
          alt=""
          className="hero-image absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="title text-white text-7xl font-bold opacity-0">
            Modern Villa
          </h1>

          <p className="subtitle text-white text-xl mt-4 opacity-0">
            Where Architecture Meets Luxury
          </p>
        </div>

        <img
          src={heroImage2}
          alt=""
          className="living-image absolute inset-0 w-full h-full object-cover opacity-0"
        />

        <img
          src={heroImage3}
          alt=""
          className="bedrooms-image absolute inset-0 w-full h-full object-cover opacity-0"
        />
      </section>

      <div className="h-[200vh]" />
    </>
  );
}

export default Homepage;
