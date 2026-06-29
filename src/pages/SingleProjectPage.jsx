import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../api/api";

function SingleProjectPage() {
  const { slug } = useParams();

const [project, setProject] = useState(null);

useEffect(() => {
  async function loadProject() {
    const data = await getProject(slug);
    setProject(data);
  }

  loadProject();
}, [slug]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* Hero */}

      <section className="relative h-screen">

        <img
          src={project.hero}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex justify-center items-center">

          <h1 className="text-6xl lg:text-8xl font-bold text-white">
            {project.title}
          </h1>

        </div>

      </section>

      {/* Overview */}

      <section className="max-w-6xl mx-auto py-24 px-6">

        <h2 className="text-5xl font-bold mb-8">
          Project Overview
        </h2>

        <p className="text-xl leading-relaxed text-gray-300">
          {project.description}
        </p>

      </section>

      {/* Gallery */}

      <section
        className="
        gallery
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-3
        gap-6
        pb-24
        px-6
      "
      >
        {project.gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="
            gallery-img
            w-full
            h-[350px]
            rounded-2xl
            object-cover
          "
          />
        ))}
      </section>
    </>
  );
}

export default SingleProjectPage;