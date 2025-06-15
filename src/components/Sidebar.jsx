import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-2 left-4 z-50 p-2 bg-blue-600 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        <FaBars />
      </button>

      {/* Sidebar Panel */}
      <div
  className={`fixed top-10 left-0 h-[calc(100%-3rem)] w-64 bg-white shadow-md transform transition-transform duration-300 z-40 ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
        <nav className="mt-16 p-4 space-y-4">
          <a href="#apply" className="block text-blue-600 font-semibold">Internship Application</a>
          <a href="#offer" className="block">Offer Letter</a>
          <a href="#certificate" className="block">Certificate Verification</a>
          <a href="#team" className="block">Join Team</a>
          <a href="#contact" className="block">Contact Info</a>
        </nav>
      </div>

      {/* Overlay when sidebar open (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
