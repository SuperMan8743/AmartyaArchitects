import React, { useEffect, useState } from "react";
import { getCareerPage } from "../api/api";
import PageHero from "../components/pagehero/PageHero";
import PageSkeleton from "../components/pageSkeleton/PageSkeleton";

function CareerPage() {
  const [careerData, setCareerData] = useState(null);

 useEffect(() => {
  async function loadCareerPage() {
    const data = await getCareerPage();
    console.log(data);
    setCareerData(data);
  }

  loadCareerPage();
}, []);

  if (!careerData) {
    return (
      <PageSkeleton />
    );
  }

  // Sirf wahi jobs rakho jinka title filled ho
  const jobs = careerData.openings.filter(
    (job) => job.title && job.title.trim() !== ""
  );

  return (
    <>
      <PageHero
        image={careerData.hero.bannerImage}
        title={careerData.hero.title}
        subTitle={careerData.hero.subTitle}
        height="h-[70vh]"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold">
            {careerData.intro.heading}
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            {careerData.intro.description}
          </p>
        </div>

        {/* Job Openings */}
        {jobs.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border rounded-3xl p-8 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold">{job.title}</h3>

                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-4 py-2 rounded-full bg-gray-100 text-black">
                    📍 {job.location}
                  </span>

                  <span className="px-4 py-2 rounded-full bg-gray-100 text-black">
                    💼 {job.type}
                  </span>

                  <span className="px-4 py-2 rounded-full bg-gray-100 text-black">
                    ⭐ {job.experience}
                  </span>
                </div>

                <p className="mt-6 text-gray-600">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold">
              We're Not Hiring Right Now
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Thank you for your interest in joining Amartya Architects.
              We currently don't have any open positions. Please check back
              later for future opportunities.
            </p>
          </div>
        )}

        {/* Apply Section */}
        <div className="text-center mt-24">
          <h2 className="text-4xl font-bold">
            {careerData.apply.heading}
          </h2>

          <p className="text-gray-600 mt-4">
            {careerData.apply.description}
          </p>

          <a
            href={`mailto:${careerData.apply.email}`}
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}

export default CareerPage;