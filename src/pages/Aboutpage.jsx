import React, { useRef, useEffect, useState } from "react";
import { Card, CardHeader, CardFooter, CardButton } from "../components/Card";
import { getAboutPage, getTeam } from "../api/api";
function Aboutpage() {
  const [showMore, setShowMore] = useState(false);
  const [aboutText, setAboutText] = useState(null);

  const [aboutData, setAboutData] = useState(null);
  const [teamData, setTeamData] = useState(null);
  useEffect(() => {
    async function loadAboutPage() {
      const data = await getAboutPage();

      // console.log("API DATA aboutpage =>", data);
      setAboutText(data.aboutText);

      setAboutData(data);
    }
    async function loadTeam() {
      const teamData = await getTeam();
      // console.log("API TEAM =>", teamData);

      setTeamData(teamData);
    }
    loadTeam();
    loadAboutPage();
  }, []);
  if (!aboutData || !teamData) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <>
      <div className="relative  object-fit ">
        <img
          // src={"/footer.jpg"}
          src={aboutData.bannerImage.img}
          alt=""
          className="w-full h-screen object-cover"
        />
        <h1 className="text-5xl text-white text-shadow-lg/30 font-semibold text-wrap absolute  bottom-[20%] left-20">
          {aboutData.bannerText}
        </h1>
      </div>

      <div className=" m-24  ">
        {/* abotu us section */}
        <div className="flex flex-col justify-center md:m-24 md:flex-row ">
          <section className=" ">
            <h1 className="text-2xl font-semibold my-auto text-wrap">
              About Amartya
            </h1>
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
          <h2 className="text-5xl">{teamData.heading} </h2>
          <h5 className="text-2xl capitalize mt-2">{teamData.subHeading}</h5>
        </section>

        <div className="flex my-20 justify-center items-center flex-wrap gap-8">
          {teamData.members.map((item) => (
            <Card className="w-60 rounded-3xl bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 p-1">
              <div className="bg-[#11111A] rounded-[22px] p-4">
                <CardHeader
                  image={item.image}
                  alt={item.name}
                  className="h-[260px] rounded-2xl"
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
