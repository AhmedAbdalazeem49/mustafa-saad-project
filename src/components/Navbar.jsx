import React from "react";

const Navbar = () => {
  return (
    <nav className="p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">CompanyName</div>
        <div className="flex space-x-4">
          <a href="#home" className="text-black">
            Home
          </a>
          <a href="#about" className="text-black">
            About
          </a>
          <a href="#services" className="text-black">
            Services
          </a>
          <a href="#portfolio" className="text-black">
            jobs
          </a>
          <a href="#contact" className="text-black">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
