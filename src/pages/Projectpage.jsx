import React from 'react'
import projects from "../data/projects";
import ProjectCard from "../components/projectCard/ProjectCard"
function Project({ project }) {
  return (
  <>
  <div className="pt-32 px-10">

      <h1 className="text-7xl font-bold mb-16">
        Our Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </div>
  </>
  )
}

export default Project
