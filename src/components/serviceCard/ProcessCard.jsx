import React from "react";

function ProcessCard({ process }) {
  return (
    <div className="relative p-8 border rounded-2xl hover:shadow-xl transition duration-300">

      <span className="text-6xl font-bold text-gray-200">
        {process.number}
      </span>

      <h3 className="text-2xl font-bold mt-6">
        {process.title}
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        {process.description}
      </p>

    </div>
  );
}

export default ProcessCard;