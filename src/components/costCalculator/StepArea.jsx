import React from "react";

function StepArea({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {

const totalArea = formData.floors.reduce(
  (total, floor) => total + Number(floor.area || 0),
  0
);
  const handleNext = () => {
    if (totalArea <= 0) {
      alert("Please enter project area.");
      return;
    }

    nextStep();
  };

  const addFloor = () => {
    setFormData({
      ...formData,
      floors: [
        ...formData.floors,
        {
          id: Date.now(),
          name: `Floor ${formData.floors.length}`,
          area: "",
        },
      ],
    });
  };

  const removeFloor = (id) => {
    if (formData.floors.length === 1) return;

    setFormData({
      ...formData,
      floors: formData.floors.filter((floor) => floor.id !== id),
    });
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-2">
        Project Area
      </h2>

      <p className="text-gray-500 mb-8">
        Enter your built-up area (sq.ft)
      </p>

      {formData.floors.map((floor, index) => (
        <div
          key={floor.id}
          className="mb-6 border border-gray-700 rounded-xl p-4"
        >
          <div className="flex justify-between items-center mb-3">

            <label className="font-semibold">
              {floor.name}
            </label>

            {formData.floors.length > 1 && (
              <button
                onClick={() => removeFloor(floor.id)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            )}

          </div>

          <input
            type="number"
            placeholder="Area in sq.ft"
            value={floor.area}
            onChange={(e) => {
              const updatedFloors = [...formData.floors];

              updatedFloors[index].area = e.target.value;

              setFormData({
                ...formData,
                floors: updatedFloors,
              });
            }}
            className="
              w-full
              border
              rounded-xl
              p-4
              outline-none
              focus:border-blue-500
            "
          />
        </div>
      ))}

      <button
        onClick={addFloor}
        type="button"
        className="
          w-full
          border-2
          border-dashed
          rounded-xl
          py-4
          hover:bg-gray-100
          transition
        "
      >
        + Add Floor
      </button>

      <div className="text-center mt-8">
        <h3 className="text-lg text-gray-500">
          Total Area
        </h3>

        <h1 className="text-4xl font-bold mt-2">
          {totalArea} sq.ft
        </h1>
      </div>

      <div className="flex gap-4 mt-10">

        <button
          onClick={prevStep}
          className="
            flex-1
            border
            border-black
            py-4
            rounded-xl
            hover:bg-gray-100
          "
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="
            flex-1
            bg-black
            text-white
            py-4
            rounded-xl
            hover:bg-gray-800
          "
        >
          Next
        </button>

      </div>
    </>
  );
}

export default StepArea;