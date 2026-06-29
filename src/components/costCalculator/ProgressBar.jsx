import React from "react";

function ProgressBar({ step }) {
  const progress = (step / 4) * 100;

  return (
    <div className="mb-10">
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-between mt-3 text-sm text-gray-500">
        <span>Category</span>
        <span>Area</span>
        <span>Details</span>
        <span>Result</span>
      </div>
    </div>
  );
}

export default ProgressBar;