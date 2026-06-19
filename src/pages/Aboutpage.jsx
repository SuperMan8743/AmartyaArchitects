import React from "react";
import Card from "../components/card/Card";

function Aboutpage() {
  //  console.log("About ScrollY:", window.scrollY);
  return (
    <>
      <div className="relative  object-fit ">
        <img
          src="/footer.jpg"
          alt=""
          className="w-full h-screen object-cover"
        />
        <h1 className="text-5xl text-white text-shadow-2xs font-semibold text-wrap absolute  bottom-[20%] left-20">
          Designing Spaces That Inspire
        </h1>
      </div>

      <div className=" mx-24  ">
        <div className="flex ">
          <h1 className="text-2xl font-semibold my-auto text-wrap">
            About Amartya
          </h1>
          <section className="my-auto">
           dafdsfadsfads
           
          </section>

          <section>
             <p className="text-lg  my-auto line-clamp-3  overflow-hidden ">
              At Amartya Architects, we believe architecture is more than just
              designing buildings—it's about creating experiences that enrich
              everyday life. With a passion for innovative design, functional
              planning, and attention to detail, we transform ideas into
              timeless spaces that reflect our clients' vision and lifestyle.
              From luxury residences and modern villas to commercial and
              interior projects, every design is thoughtfully crafted to balance
              aesthetics, comfort, and practicality. Our team works closely with
              clients through every stage of the journey—from concept
              development and 3D visualization to execution and project
              delivery—ensuring transparency, quality, and excellence at every
              step. We don't just design structures. We create spaces where
              people live, work, and thrive.
            </p>
          </section>
        </div>
        <hr className="my-2" />
        <div className=" flex  justify-center align-center flex-wrap gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
