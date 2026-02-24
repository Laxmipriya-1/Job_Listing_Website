// import React from 'react'

// const Navbar = () => {
//   return (
//     < >
//     <div className="navBar flex justify-between items-center p-12 ">
//         <div className="logoDiv">
//           <h1 className="logo text-[25px] text-blue-700"><strong>Job Listing Website </strong></h1>
//         </div>

//         <div className="menu flex gap-8">
//           {/* <li className="menuList text-gray-400 hover:text-red-500">Jobs</li>
//           <li className="menuList text-gray-400 hover:text-red-500">Companies</li>
//           <li className="menuList text-gray-400 hover:text-red-500">About</li>
//           <li className="menuList text-gray-400 hover:text-red-500">Contact</li>
//           <li className="menuList text-gray-400 hover:text-red-500">Blog</li> */}
//           <li className="menuList text-gray-400 hover:text-red-500">Login</li>
//           <li className="menuList text-gray-400 hover:text-red-500">Register</li>

//         </div>
//     </div>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        
        {/* Logo */}
        <div className="logoDiv">
          <h1 className="text-xl md:text-2xl font-bold text-blue-700">
            Job Listing Website
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Jobs</li>
          <li className="hover:text-blue-600 cursor-pointer">Companies</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
          <li className="hover:text-blue-600 cursor-pointer">Login</li>
          <li className="hover:text-blue-600 cursor-pointer">Register</li>
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-gray-600 font-medium">
      
          <li className="hover:text-blue-600 cursor-pointer">Login</li>
          <li className="hover:text-blue-600 cursor-pointer">Register</li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

