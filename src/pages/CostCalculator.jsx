import React, { useEffect, useState } from "react";

import { getCalculatorData } from "../api/api";

import ProgressBar from "../components/costCalculator/ProgressBar";
import StepCategory from "../components/costCalculator/StepCategory";
import StepArea from "../components/costCalculator/StepArea";
import StepLead from "../components/costCalculator/StepLead";
import Result from "../components/costCalculator/Result";
import PageSkeleton from "../components/pageSkeleton/PageSkeleton";

function CostCalculator() {
  const [calculatorData, setCalculatorData] = useState(null);

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    category: "",
    floors: [
      {
        id: 1,
        name: "Ground Floor",
        area: "",
      },
    ],
    name: "",
    phone: "",
  });

  const [result, setResult] = useState(null);
  const resetCalculator = () => {
    setStep(1);

    setResult(null);

    setFormData({
      category: "",
      floors: [
        {
          id: 1,
          name: "Ground Floor",
          area: "",
        },
      ],
      name: "",
      phone: "",
    });
  };
  useEffect(() => {
    async function loadCalculator() {
      const data = await getCalculatorData();

      setCalculatorData(data);
    }

    loadCalculator();
  }, []);

  if (!calculatorData) {
    return (
            <PageSkeleton />

    );
  }

  return (
    <>
      <section className="min-h-screen my-24 bg-[#0B1623]  px-4">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white">
            {calculatorData.intro.heading}
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            {calculatorData.intro.description}
          </p>
        </div>
        <div className="max-w-xl mx-auto rounded-3xl bg-[#111827] border border-white/10 p-10 shadow-2xl">
          <ProgressBar step={step} />

          {step === 1 && (
            <StepCategory
              categories={calculatorData.categories}
              formData={formData}
              setFormData={setFormData}
              nextStep={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <StepArea
              formData={formData}
              setFormData={setFormData}
              nextStep={() => setStep(3)}
              prevStep={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <StepLead
              formData={formData}
              setFormData={setFormData}
              calculatorData={calculatorData}
              setResult={setResult}
              nextStep={() => setStep(4)}
              prevStep={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <Result
              result={result}
              formData={formData}
              whatsappNumber={calculatorData.whatsappNumber}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default CostCalculator;
