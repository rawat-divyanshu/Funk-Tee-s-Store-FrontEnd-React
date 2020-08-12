import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "./../auth/helper/index";
import "../App.css";

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
          <Link className="px-5 lg:px-10 py-2" to="/cart">
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
            className={
              isLoggedIn ? "relative inline-flex mt-4 md:mt-0" : "hidden"
            }
          >
            <div className="dropdown inline-block relative">
              <button className="bg-white text-black font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">
                  {isLoggedIn ? isLoggedIn["user"]["fullName"] : ""}
                </span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-48">
                <li className="">
                  <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                {isLoggedIn && isLoggedIn["user"]["role"] === 1 ? (
                  <li className="">
                    <Link
                      to="/admin/dashboard"
                      className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    >
                      Admin Dashboard
                    </Link>
                  </li>
                ) : (
                  <li></li>
                )}
                <li className="">
                  <Link
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
