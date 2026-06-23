import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <>
    <Link
      to={`/project/${project.slug}`}
      className="group block overflow-hidden rounded-3xl"
    >
      <div className="relative h-[450px] overflow-hidden">
        <img
          src={project.hero}
          alt=""
          className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
        />

        <div
          className="
          absolute
          inset-0
          bg-black/40
          flex
          items-end
          p-8
        "
        >
          <div>
            <h2 className="text-4xl font-bold text-white">
              {project.title}
            </h2>

            <p className="text-white/80 mt-2">
              {project.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}

export default ProjectCard