import React from 'react';

const Dropdown = ({ dropdown }) => {
  const { mainCategories, quickLinks } = dropdown;

  return (
    <div className="absolute top-full left-[-100px] mt-2 w-[600px] bg-white shadow-lg rounded-md z-50 p-6 flex">
      {/* Left Column: Main Categories */}
      <div className="flex-1">
        <ul className="space-y-2">
          {mainCategories.map((category, index) => (
            <li
              key={index}
              className={`text-gray-900 cursor-pointer ${
                index === 0 ? 'font-semibold text-lg' : 'font-medium text-base'
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Quick Links */}
      <div className="flex-1 space-y-4">
        {Object.entries(quickLinks).map(([sectionTitle, links], index) => (
          <div key={index}>
            <h3 className="text-gray-500 text-xs font-semibold uppercase">{sectionTitle}</h3>
            <ul className="mt-2 space-y-1">
              {links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-gray-700 text-sm hover:text-black cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;