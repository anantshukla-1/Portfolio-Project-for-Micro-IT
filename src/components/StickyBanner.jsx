import React from 'react';

const StickyBanner = () => {
  return (
    <div className="sticky top-0 left-0 z-30 p-2 bg-yellow-400 text-black font-bold shadow-md w-full md:w-auto md:fixed transition-opacity duration-700 opacity-95 hover:opacity-100">

      <p className="text-center md:text-left px-4">📌 Apply for Internship</p>
    </div>
  );
};

export default StickyBanner;
