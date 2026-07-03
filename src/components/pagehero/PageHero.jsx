import React from "react";

function PageHero({
  image,
  title,
  subTitle,
  height = "h-[80vh]",
  overlay = "bg-black/50",
}) {
  return (
    <section className={`relative w-full ${height}`}>
      <img src={image} alt={title} className="w-full h-full object-cover" />

      <div
        className={`absolute inset-0 ${overlay} flex flex-col items-center justify-center px-6`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
          {title}
        </h1>

        {subTitle && (
          <p className="mt-6 max-w-3xl text-center text-lg md:text-xl text-gray-200">
            {subTitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHero;
