import React from "react";

function StepCategory({
  categories,
  formData,
  setFormData,
  nextStep,
}) {
  const handleNext = () => {
    if (!formData.category) {
      alert("Please select a category");
      return;
    }

    nextStep();
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-2">
        Select Category
      </h2>

      <p className="text-gray-500 mb-8">
        Choose your project type
      </p>

      <div className="space-y-4">
        {categories.map((item) => (
          <label
            key={item.id}
            className={`
              block
              border
              rounded-xl
              p-4
              cursor-pointer
              transition
              ${
                formData.category === item.value
                  ? "border-black bg-black text-white"
                  : "border-gray-300"
              }
            `}
          >
            <input
              type="radio"
              name="category"
              value={item.value}
              checked={formData.category === item.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }
              className="hidden"
            />

            {item.label}
          </label>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="
          mt-8
          w-full
          bg-black
          text-white
          py-4
          rounded-xl
          hover:bg-gray-800
          transition
        "
      >
        Next
      </button>
    </>
  );
}

export default StepCategory;