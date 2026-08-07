import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function ServiceCard({ service }) {
  return (
    <Link
      // to={`/services/${service.slug}`}
      to={`/project`}
      className="group block overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>

        <ul className="space-y-2 text-gray-600">
          {service.description.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-8">
          <span className="uppercase tracking-widest text-sm font-semibold text-gray-800">
            View Project
          </span>

          <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:rotate-45">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
