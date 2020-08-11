import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "./../auth/helper/index";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = isAuthenticated();
  return (
    <header className="text-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link
            to="/"
            className="mr-5 font-sansita text-lg cursor-pointer hover:text-gray-900"
          >
            Home
          </Link>
          <Link className="mr-5 font-sansita text-lg cursor-pointer hover:text-gray-900">
            Collections
          </Link>
          <Link className="mr-5 font-sansita text-lg cursor-pointer hover:text-gray-900">
            Explore
          </Link>
          <Link className="font-sansita text-lg cursor-pointer hover:text-gray-900">
            Contact Us
          </Link>
        </nav>
        <Link
          to="/"
          className="flex order-first lg:order-none lg:w-1/5 cursor-pointer title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <span className="text-4xl md:text-3xl lg:ml-3 font-chicle">
            {">> "}Funk Tee's Store
          </span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link className="px-5 lg:px-10 py-2" href="#">
            <i className="fas fa-shopping-cart pt-4 text-3xl md:pt-0"></i>
          </Link>
          <Link
            to="/signin"
            className={
              !isLoggedIn
                ? "inline-flex items-center text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-opacity-75 rounded text-base mt-4 md:mt-0"
                : "hidden"
            }
          >
            Signin
          </Link>
          <div
            class={isLoggedIn ? "relative inline-flex mt-4 md:mt-0" : "hidden"}
          >
            <svg
              class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fill-rule="nonzero"
              />
            </svg>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              {isLoggedIn ? isLoggedIn["user"]["fullName"] : ""}
            </button>
            <ul
              className={
                isDropdownOpen
                  ? "absolute w-48 -left-6 flex flex-col mt-10 border-2 border-gray-600 justify-center items-center"
                  : "hidden"
              }
            >
              <li className="pt-2 md:pb-2">
                <Link>Profile</Link>
              </li>
              {isLoggedIn && isLoggedIn["user"]["role"] === 1 ? (
                <li className="pt-2 md:pb-2 ">
                  <Link>Admin Dashboard</Link>
                </li>
              ) : (
                <li></li>
              )}
              <li className="pt-2 md:pb-2">
                <Link>Signout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
