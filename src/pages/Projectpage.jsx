import React, { useEffect, useMemo, useState } from "react";
import Masonry from "react-masonry-css";
import ProjectCard from "../components/projectCard/ProjectCard";
import { getProjects } from "../api/api";
import PageSkeleton from "../components/pageSkeleton/PageSkeleton";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();

        console.log("PROJECTS:", data);

        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  // Get unique categories from projects
  const categories = useMemo(() => {
    const categoryMap = new Map();

    projects.forEach((project) => {
      project.categories?.forEach((category) => {
        categoryMap.set(category.slug, category.name);
      });
    });

    const result = Array.from(categoryMap, ([slug, name]) => ({
      slug,
      name,
    }));

    console.log("FILTER CATEGORIES:", result);

    return result;
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories?.some(
        (category) => category.slug === activeCategory
      )
    );
  }, [projects, activeCategory]);

  if (loading) {
    return <PageSkeleton />;
  }

  return (
    <section className="pt-32 pb-20 px-6 lg:px-16">

      <div className="max-w-7xl mx-auto mb-12">

        <h1 className="md:text-6xl text-3xl font-bold">
          Our Projects
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl">
          Explore our residential, commercial and interior projects.
        </p>


        {/* PROJECT FILTER */}

     {/* Project Filters */}
<div className="flex flex-wrap gap-3 mt-10">
  <button
    onClick={() => setActiveCategory("all")}
    className={`px-5 py-2 rounded-full border transition-all duration-300 ${
      activeCategory === "all"
        ? "bg-white text-black"
        : "border-gray-500 text-white hover:bg-white hover:text-black"
    }`}
  >
    All
  </button>

  {categories.map((category) => (
    <button
      key={category.slug}
      onClick={() => setActiveCategory(category.slug)}
      className={`px-5 py-2 rounded-full border transition-all duration-300 ${
        activeCategory === category.slug
          ? "bg-white text-black"
          : "border-gray-500 text-white hover:bg-white hover:text-black"
      }`}
    >
      {category.name}
    </button>
  ))}
</div>

      </div>


      {/* PROJECT CARDS */}

      {filteredProjects.length > 0 ? (

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >

          {filteredProjects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </Masonry>

      ) : (

        <p className="max-w-7xl mx-auto text-gray-500">
          No projects found in this category.
        </p>

      )}

    </section>
  );
}

export default ProjectPage;