import React, { useState, useEffect } from "react";
import { getVrPage } from "../api/api";
import { Card, CardHeader, CardFooter, CardButton } from "../components/Card";
import PageHero from "../components/pagehero/PageHero"

const VrPage = () => {
  const [vrData, setVrData] = useState(null);

  useEffect(() => {
    async function loadVrPage() {
      const data = await getVrPage();

      setVrData(data);
    }

    loadVrPage();
  }, []);

  if (!vrData) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* Hero */}

    <PageHero
  image={vrData.hero.bannerImage}
  title={vrData.hero.title}
  subTitle={vrData.hero.subTitle}
/>

      {/* Introduction */}

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold">{vrData.intro.heading}</h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          {vrData.intro.description}
        </p>
      </section>

      {/* VR Cards */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-5xl font-bold mb-16">Explore Our VR Tours</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vrData.tours.map((tour) => (
            <Card
              key={tour.id}
              className="relative h-96 overflow-hidden rounded-[30px] group cursor-pointer"
            >
              <CardHeader
                image={tour.image}
                alt={tour.title}
                className="w-full h-full "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-all duration-500" />

              {/* Category */}

              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full border border-white/50 text-white text-sm backdrop-blur">
                  {tour.category}
                </span>
              </div>

              {/* Bottom Content */}

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h2 className="text-5xl font-bold">{tour.title}</h2>

                <p className="mt-3 text-xl">{tour.location}</p>

                <CardFooter className="mt-8">
                  <CardButton
                    href={tour.vrLink}
                    target="_blank"
                    className="uppercase tracking-widest text-white"
                  >
                    Explore VR →
                  </CardButton>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default VrPage;
