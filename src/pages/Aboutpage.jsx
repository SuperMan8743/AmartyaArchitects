import React, { useRef, useEffect, useState } from "react";
import { Card, CardHeader, CardFooter, CardButton } from "../components/Card";
import { getAboutPage, getTeam } from "../api/api";
import PageHero from "../components/pagehero/PageHero";
import PageSkeleton from "../components/pageSkeleton/PageSkeleton";
function Aboutpage() {
  const [showMore, setShowMore] = useState(false);
  const [aboutText, setAboutText] = useState(null);

  const [aboutData, setAboutData] = useState(null);
  const [teamData, setTeamData] = useState(null);
  useEffect(() => {
    async function loadAboutPage() {
      const data = await getAboutPage();

      setAboutText(data.aboutDescription);

      setAboutData(data);
    }
    async function loadTeam() {
      const teamData = await getTeam();

      setTeamData(teamData);
    }
    loadTeam();
    loadAboutPage();
  }, []);
  if (!aboutData || !teamData) {
    return <PageSkeleton />;
  }
  return (
    <>
      <PageHero
        image={aboutData.hero.bannerImage}
        title={aboutData.hero.title}
        subtitle={aboutData.hero.subTitle}
      />

      <div className=" md:m-24 m-5 ">
        {/* abotu us section */}
        <div className="flex flex-col justify-center md:m-24 md:flex-row ">
          <section className="  ">
            <h1 className="text-2xl font-semibold">{aboutData.aboutHeading}</h1>
          </section>

          <section className="w-full m-auto md:w-full">
            <p className="text-lg leading-relaxed">
              {showMore ? aboutText : aboutText.slice(0, 200) + "..."}
            </p>
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
          <h2 className="text-5xl">{aboutData.teamHeading} </h2>
          <h5 className="text-2xl capitalize mt-2">
            {aboutData.teamSubHeading}
          </h5>
        </section>

        <div className="flex my-20 justify-center items-center flex-wrap gap-8">
          {teamData.members.map((item) => (
            <Card
              key={item.id}
              className="w-60 rounded-3xl bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 p-1"
            >
              <div className="bg-[#11111A] rounded-[22px] p-4">
                <CardHeader
                  image={item.image}
                  alt={item.name}
                   loading="lazy"
                  className="rounded-2xl"
                />

                <div className="text-center mt-4 capitalize">
                  <h3 className="text-white text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.designation}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
export default Aboutpage;
