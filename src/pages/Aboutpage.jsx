import React, { useState } from "react";
import Card from "../components/card/Card";

function Aboutpage() {
  const [showMore, setShowMore] = useState(false);
  const text = `
  At Amartya Architects, we believe architecture is more than designing buildings—
  it's about creating experiences that enrich everyday life.

  With a passion for innovative design, functional planning, and attention to detail,
  we transform ideas into timeless spaces that reflect our clients' vision and lifestyle.

  From luxury residences and modern villas to commercial and interior projects,
  every design is thoughtfully crafted to balance aesthetics, comfort, and practicality.
  `;
  return (
    <>
      <div className="relative  object-fit ">
        <img
          src="/footer.jpg"
          alt=""
          className="w-full h-screen object-cover"
        />
        <h1 className="text-5xl text-white text-shadow-lg/30 font-semibold text-wrap absolute  bottom-[20%] left-20">
          Designing Spaces That Inspire
        </h1>
      </div>

      <div className=" m-24  ">
        {/* abotu us section */}
        <div className="flex flex-col justify-center md:m-24 md:flex-row ">
          <section className=" ">
            <h1 className="text-2xl font-semibold my-auto text-wrap">
              About Amartya
            </h1>
          </section>

          <section className="w-full m-auto md:w-full">
            <p className="text-lg leading-relaxed">
              {showMore ? text : text.slice(0, 200) + "..."}
            </p>{" "}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-3 text-blue-600 font-semibold"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </section>
        </div>
        <hr className="my-2" />
        <section className="md:m-24">
          <h2 className="text-5xl">Our Team</h2>
          <h5 className="text-2xl capitalize mt-2">meet the team that makes the magic happen</h5>
        </section>
        <div className=" flex my-20  justify-center align-center flex-wrap gap-3">
          <Card 
          name="devahish" 
          profile="digital marketing executive"/>
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
