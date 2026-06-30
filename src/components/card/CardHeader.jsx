import React from "react";

function CardHeader({
  image,
  alt,
  className = "",
  children,
}) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {children}
    </div>
  );
}

export default CardHeader;