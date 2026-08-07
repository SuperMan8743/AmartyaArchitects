import React, { useEffect, useState } from "react";
import { getTermsConditions } from "../api/api";
import PageHero from "../components/pagehero/PageHero";
import PageSkeleton from "../components/pageSkeleton/PageSkeleton";

function TermConditionPage() {
  const [termConditionData, setTermConditionData] = useState(null);

  useEffect(() => {
    async function loadTermCondition() {
      try {
        const data = await getTermsConditions();
        console.log(data); // 👈 ye add karo
        setTermConditionData(data);
      } catch (error) {
        console.error("Error loading Privacy Policy:", error);
      }
    }

    loadTermCondition();
  }, []);

  if (!termConditionData) {
    return (
          <PageSkeleton />

    );
  }
  return (
    <>
      <PageHero
        image={termConditionData.hero.bannerImage}
        title={termConditionData.hero.title}
        subTitle={termConditionData.hero.subTitle}
        height="h-[70vh]"
      />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div
          className="prose prose-lg max-w-none
               prose-headings:text-white
               prose-p:text-gray-300
               prose-strong:text-white
               prose-li:text-gray-300
               prose-a:text-blue-400"
          dangerouslySetInnerHTML={{
            __html: termConditionData.content,
          }}
        />
      </section>
    </>
  );
}

export default TermConditionPage;
