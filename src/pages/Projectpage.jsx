import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/projectCard/ProjectCard";
import SplitText from "../components/animation/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Project({ project }) {
  useGSAP(() => {
  gsap.from(".word", {
    y: 120,
    opacity: 0,
    stagger: 0.03,
    duration: 1,
    ease: "power4.out",
  });
});
  return (
    <>
      <div className="">
        <div className="relative  object-fit ">
          {/* image should be come from backend  */}
          <img
            src="/footer.jpg"
            alt=""
            className="w-full h-screen object-cover"
          />
          {/* <h1 className="text-5xl text-white text-shadow-lg/30 font-semibold text-wrap absolute  bottom-[20%] left-20">
            Designing Spaces That Inspire
          </h1> */}

          {/* <h1 className="text-5xl text-white text-shadow-lg/30 font-semibold text-wrap absolute  bottom-[20%] left-20">
            {"Designing Spaces That Inspire".split(" ").map((word, i) => (
              <span key={i} className="word inline-block mr-4">
                {word}
              </span>
            ))}
          </h1> */}
          <SplitText
  text="Designing Spaces That Inspire"
  className="text-white text-8xl font-bold"
/>
        </div>
        <h1 className="text-7xl font-bold mb-16">Our Projects</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
