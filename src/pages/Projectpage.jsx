import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import ProjectCard from "../components/projectCard/ProjectCard";
import { getProjects } from "../api/api";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

function ProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      setProjects(data);
    }

    loadProjects();
  }, []);

  if (!projects.length) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="pt-32 pb-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-6xl font-bold">Our Projects</h1>

        <p className="text-gray-500 mt-4 max-w-xl">
          Explore our residential, commercial and interior projects.
        </p>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Masonry>
    </section>
  );
}

export default ProjectPage;
