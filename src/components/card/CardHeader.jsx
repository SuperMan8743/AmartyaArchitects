import React from "react";

function CardHeader({ image, alt, className = "", children }) {
  return (
    <div
      className={`relative w-full aspect-[4/5] overflow-hidden rounded-2xl ${className}`}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    //  <img
    //   src={image}
    //   alt={alt}
    //   className=" object-cover rounded-2xl"
    // />
  );
}

export default CardHeader;
