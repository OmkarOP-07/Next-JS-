import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-bold">
          MyBrand
        </a>

        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <ul className={`md:flex space-x-4`}>
          <li>
            <a href="#" className="text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="about" className="text-white hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
