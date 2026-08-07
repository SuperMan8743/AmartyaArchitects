import React from 'react'

// components/common/PageSkeleton.jsx

function PageSkeleton() {
  return (
    <div className="animate-pulse">

      {/* Hero */}
      <div className="h-[70vh] w-full bg-gray-700/30" />

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="h-12 w-80 bg-gray-700/30 rounded mx-auto" />

        {/* Paragraph */}
        <div className="mt-8 space-y-3">
          <div className="h-4 w-full bg-gray-700/30 rounded" />
          <div className="h-4 w-5/6 bg-gray-700/30 rounded" />
          <div className="h-4 w-4/6 bg-gray-700/30 rounded" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-72 rounded-3xl bg-gray-700/30"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageSkeleton;