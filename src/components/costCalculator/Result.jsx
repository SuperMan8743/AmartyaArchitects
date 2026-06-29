import React from "react";

function Result({ result, formData, whatsappNumber }) {
  if (!result) return null;

const totalArea = formData.floors.reduce(
  (total, floor) => total + Number(floor.area || 0),
  0
);
const floorDetails = formData.floors
  .map((floor) => `${floor.name} : ${floor.area} sq.ft`)
  .join("\n");
const message = `
Hi Amartya Architects,

I checked my construction estimate.

Category : ${formData.category}
Area : ${totalArea} sq.ft

Estimated Cost : ₹${result.total.toLocaleString()}
Rate : ₹${result.rate}/sq.ft

Name : ${formData.name}
Phone : ${formData.phone}
`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <h2 className="text-3xl font-bold mb-2">
        Your Estimate
      </h2>

      <p className="text-gray-500 mb-8">
        Estimated project cost
      </p>

      <div className="bg-gray-100 rounded-2xl p-8 text-center">

        <h3 className="text-gray-500">
          Total Estimated Cost
        </h3>

        <h1 className="text-5xl text-black font-bold mt-4">
          ₹ {result.total.toLocaleString()}
        </h1>

        <p className="mt-5 text-gray-600">
          ₹ {result.rate} / sq.ft
        </p>

      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="
          mt-8
          w-full
          bg-green-500
          text-white
          py-4
          rounded-xl
          flex
          justify-center
          items-center
          hover:bg-green-600
          transition
        "
      >
        💬 Get Detailed Quote on WhatsApp
      </a>
    </>
  );
}

export default Result;