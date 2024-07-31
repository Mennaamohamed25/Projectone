import React from 'react'

const Services = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100">
      {/* Container for the columns */}
      <div className="flex flex-wrap gap-6 md:gap-8">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 h-[238px] rounded-lg p-6 bg-white flex items-center justify-center"
            style={{ maxWidth: '394px' }}
          >
            {/* Content of each column */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Column {index + 1}</h3>
              <p className="text-base">Content goes here.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services
