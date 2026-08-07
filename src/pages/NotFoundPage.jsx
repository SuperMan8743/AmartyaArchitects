import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PageHero from "../components/pageHero/PageHero";
import { getNotFoundPage } from "../api/api";
import PageSkeleton from "../components/pageSkeleton/PageSkeleton";

function NotFoundPage() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    async function loadPage() {
      const data = await getNotFoundPage();
      setPageData(data);
    }

    loadPage();
  }, []);

  if (!pageData) {
    return (
          <PageSkeleton />

    );
  }

  return (
    <>
      <PageHero
        image={pageData.hero.bannerImage}
        title={pageData.hero.title}
        subTitle={pageData.hero.subTitle}
        height="h-[60vh]"
      />

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">

        <h2 className="text-5xl font-bold">
          {pageData.content.heading}
        </h2>

        <p className="mt-6 text-gray-500 leading-8">
          {pageData.content.description}
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <Link
            to={pageData.content.primaryButton.path}
            className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            {pageData.content.primaryButton.text}
          </Link>

          <Link
            to={pageData.content.secondaryButton.path}
            className="border border-black px-8 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            {pageData.content.secondaryButton.text}
          </Link>

        </div>

      </section>
    </>
  );
}

export default NotFoundPage;