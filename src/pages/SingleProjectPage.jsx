import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const SingleProjectPage = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }
  useGSAP(() => {
    gsap.from(".project-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(".gallery-img", {
      y: 80,
      opacity: 0,
      stagger: 0.15,

      scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
      },
    });
  });
  return

  <div>
    <section className="relative h-screen">
      <img src={project.hero} alt="" className="w-full h-full object-cover" />

      <div
        className="
          absolute
          inset-0
          bg-black/40
          flex
          items-center
          justify-center
        "
      >
        <h1 className="text-white text-8xl font-bold">{project.title}</h1>
      </div>
    </section>

    <section className="max-w-6xl mx-auto py-20">
      <h2 className="text-5xl font-bold mb-8">Project Overview</h2>

      <p className="text-xl text-gray-300">{project.description}</p>
    </section>

    <section
      className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-3
        gap-6
        pb-20
        "
    >
      {project.gallery.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className="
            w-full
            h-[350px]
            object-cover
            rounded-2xl
            "
        />
      ))}
    </section>
  </div>;
};

export default SingleProjectPage;
