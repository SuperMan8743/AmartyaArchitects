import React from "react";

const Card = () => {
  return (
    <>
      <div className="w-[240px] rounded-3xl bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 p-1">
  <div className="bg-[#11111A] rounded-[22px] p-4">
    
    <div className="rounded-2xl overflow-hidden">
      <img
        src="/team.jpg"
        // src="/photo.png"
        alt=""
        className="w-full h-[260px] object-cover"
      />
    </div>

    <div className="text-center mt-4 capitalize">
      <h3 className="text-white text-xl font-bold">
        devashish
      </h3>

      <p className="text-gray-400 text-sm capitalize">
        social Mediea Executive
      </p>
    </div>

  </div>
</div>
    </>
  );
};

export default Card;
