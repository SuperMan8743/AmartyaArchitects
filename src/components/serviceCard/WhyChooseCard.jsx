import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function WhyChooseCard({ item }) {
  return (
    <div className="flex gap-4 p-6 rounded-2xl border hover:shadow-lg transition duration-300">

      <FaCheckCircle className="text-3xl text-green-600 mt-1 flex-shrink-0" />

      <div>

        <h3 className="text-xl font-semibold">
          {item.title}
        </h3>

        <p className="mt-2 text-gray-600 leading-7">
          {item.description}
        </p>

      </div>

    </div>
  );
}

export default WhyChooseCard;