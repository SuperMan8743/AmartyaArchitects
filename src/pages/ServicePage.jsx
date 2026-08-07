import React, { useState, useEffect } from "react";
import { getServicesPage } from "../api/api";
import ServiceCard from "../components/serviceCard/ServiceCard";
import ProcessCard from "../components/serviceCard/ProcessCard";
import WhyChooseCard from "../components/serviceCard/WhyChooseCard";
import { Link } from "react-router-dom";
import PageHero from "../components/pagehero/PageHero";
import PageSkeleton from "../components/pageSkeleton/PageSkeleton";

const ServicePage = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    async function loadServiceData() {
      const data = await getServicesPage();

      setServiceData(data);
    }

    loadServiceData();
  }, []);

  if (!serviceData) {
    return (
          <PageSkeleton />

    );
  }

  return (
    <>
      {/* Hero Section */}

      <PageHero
        image={serviceData.hero.bannerImage}
        title={serviceData.hero.title}
        subTitle={serviceData.hero.subTitle}
        className="h-[80vh]"
      />

      {/* Introduction */}

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold">
          {serviceData.intro.heading}
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          {serviceData.intro.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.serviceList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
      {/* how we work  */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">{serviceData.process.heading}</h2>

          <p className="text-gray-500 mt-5">{serviceData.process.subHeading}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.process.steps.map((item, index) => (
            <ProcessCard key={index} process={item} />
          ))}
        </div>
      </section>
      {/* Why choose us */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            {serviceData.whyChooseUs.heading}
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            {serviceData.whyChooseUs.subHeading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.whyChooseUs.items.map((item, index) => (
  <WhyChooseCard key={index} item={item} />
))}
        </div>
      </section>
      {/* CTA */}
      {/* CTA Section */}

      <section className="relative h-[60vh] mt-24">
        <img
          src={serviceData.cta.backgroundImage}
          alt={serviceData.cta.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
            {serviceData.cta.title}
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mt-6 max-w-3xl text-center leading-8">
            {serviceData.cta.description}
          </p>

          <Link
            to={serviceData.cta.buttonLink}
            className="mt-10 bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            {serviceData.cta.buttonText}
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
