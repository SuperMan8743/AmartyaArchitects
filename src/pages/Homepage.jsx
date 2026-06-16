import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage2 from "/2.png";
import heroImage3 from "/3.jpg";

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
        },
      })
      .to(".hero-image", {
        scale: 5,
        transformOrigin: "40% 75%",
      })
      .to(".hero-image", {
        opacity: 0,
      })
      // .to(".inside-image", {
      //   opacity: 1,
      // })
      .to(
        ".inside-image",
        {
          scale: 1.5,
          duration: 2,
        },
        "<",
      );

    ScrollTrigger.refresh();
  }, []);
  return (
    <>
      {/* exterior  */}
      <section className="hero h-screen  overflow-hidden">
        <img
          className="hero-image w-full  h-full  object-cover"
          src={heroImage2}
          alt=""
        />
        {/* Interior  */}
        <img
          src={heroImage3}
          alt=""
          className="inside-image absolute inset-0  h-full object-cover opacity-0 "
        />
      </section>

      <div className="h-[200vh]"></div>

      {/* <div className="my-4 lg:w-[80%] m-auto border shadow-2xl p-1">
      <h1 className="text-4xl font-semibold">
        Designing Timeless Spaces, Creating Lasting Impressions
      </h1>
      <br />
      <p className="text[20px]">
        At Amartya Architects, we transform ideas into exceptional
        architectural, interior, and landscape experiences. Based in Delhi, we
        specialize in creating thoughtfully designed residential, commercial,
        hospitality, and institutional spaces that seamlessly blend
        functionality, aesthetics, and sustainability.
        <br />
        From concept development to project execution, our team delivers
        innovative design solutions tailored to your vision, lifestyle, and
        business goals. Your Dream Space Starts Here.
      </p>
      <h2 className="text-2xl font-semibold py-2">Your Dream Space Starts Here.</h2>
     <div className="flex flex-col my-4">
      
       <Link to="/project" className="font-semibold underline">Explore Our Projects</Link>
      <Link to="/contact" className="font-semibold underline" >Schedule a Consultation</Link>
     </div>
    </div> */}
    </>
  );
}

export default Homepage;
