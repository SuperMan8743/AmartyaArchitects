import React from 'react'
import { Link } from "react-router-dom";

function Homepage() {
  return (
   <>
   <div className="my-4 lg:w-[80%] m-auto border shadow-2xl p-1">
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
    </div>
   </>
  )
}

export default Homepage