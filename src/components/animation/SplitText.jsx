import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SplitText  = ({ text, className = "" }) => {
    useGSAP(() => {
    gsap.from(".split-char", {
      y: 120,
      opacity: 0,
      stagger: 0.03,
      duration: 1,
      ease: "power4.out",
    });
  });
  return (
   <h1 className={`{className} text-5xl text-white text-shadow-lg/30 font-semibold text-wrap absolute  bottom-[20%] left-20 `}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="split-char inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  )
}

export default SplitText 