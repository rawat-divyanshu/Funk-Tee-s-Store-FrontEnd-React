import React from "react";

const Navbar = () => {
  return (
    <header class="text-black body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a class="mr-5 font-sansita text-lg cursor-pointer hover:text-gray-900">
            Home
          </a>
          <a class="mr-5 font-sansita text-lg cursor-pointer hover:text-gray-900">
            Collections
          </a>
          <a class="mr-5 font-sansita text-lg cursor-pointer hover:text-gray-900">
            Explore
          </a>
          <a class="font-sansita text-lg cursor-pointer hover:text-gray-900">
            Contact Us
          </a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <span class="text-4xl md:text-3xl lg:ml-3 font-chicle">
            {">> "}Funk Tee's Store
          </span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <a className="px-5 lg:px-10 py-2" href="#">
            <i class="fas fa-shopping-cart pt-4 text-3xl md:pt-0"></i>
          </a>
          <button class="inline-flex items-center text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-opacity-75 rounded text-base mt-4 md:mt-0">
            Signin
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
