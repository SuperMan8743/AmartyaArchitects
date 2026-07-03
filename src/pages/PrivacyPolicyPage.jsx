import React, { useEffect, useState } from "react";
import { getPrivacyPolicy } from "../api/api";
import PageHero from "../components/pagehero/PageHero";

function PrivacyPolicyPage() {
  const [privacyData, setPrivacyData] = useState(null);

  useEffect(() => {
    async function loadPrivacyPolicy() {
      const data = await getPrivacyPolicy();
      setPrivacyData(data);
    }

    loadPrivacyPolicy();
  }, []);

  if (!privacyData) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <PageHero
        image={privacyData.hero.bannerImage}
        title={privacyData.hero.title}
        subTitle={privacyData.hero.subTitle}
        height="h-[70vh]"
      />

      <section className="max-w-5xl mx-auto px-6 py-20">

        {privacyData.sections.map((section) => (
          <div
            key={section.id}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {section.title}
            </h2>

            <p className="text-gray-600 leading-8">
              {section.content}
            </p>
          </div>
        ))}

      </section>
    </>
  );
}

export default PrivacyPolicyPage;