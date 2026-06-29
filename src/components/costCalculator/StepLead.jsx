import React from "react";

function StepLead({
  formData,
  setFormData,
  calculatorData,
  setResult,
  nextStep,
  prevStep,
}) {
  const calculateCost = () => {
    const { category, name, phone } = formData;

    const area = formData.floors.reduce(
      (total, floor) => total + Number(floor.area || 0),
      0
    );

    if (!name || !phone) {
      alert("Please fill all details.");
      return;
    }

    const selectedCategory = calculatorData.categories.find(
      (item) => item.value === category
    );

    if (!selectedCategory) {
      alert("Invalid Category");
      return;
    }

    const selectedRate = selectedCategory.rates.find(
      (item) => area >= item.min && area <= item.max
    );

    if (!selectedRate) {
      alert("Invalid Area");
      return;
    }

    const rate = selectedRate.price;

    const total = area * rate;

    setResult({
      total,
      rate,
    });

    nextStep();
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-2">
        Your Details
      </h2>

      <p className="text-gray-500 mb-8">
        Get your instant estimate
      </p>

      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        className="w-full border rounded-xl p-4 mb-5"
      />

      <input
        type="tel"
        placeholder="Mobile Number"
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
        className="w-full border rounded-xl p-4"
      />

      <div className="flex gap-4 mt-10">
        <button
          onClick={prevStep}
          className="flex-1 border border-black py-4 rounded-xl"
        >
          Back
        </button>

        <button
          onClick={calculateCost}
          className="flex-1 bg-black text-white py-4 rounded-xl"
        >
          Get Estimate
        </button>
      </div>
    </>
  );
}

export default StepLead;