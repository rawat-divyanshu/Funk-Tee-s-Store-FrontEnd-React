import React, { useState } from "react";
import Base from "../core/Base";
import "../App.css";
import { Link } from "react-router-dom";
import { isAuthenticated } from "./../auth/helper/index";

const UserProfile = () => {
  const { user } = isAuthenticated();

  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
          <Link to="/" className="text-4xl md:text-3xl lg:ml-3 font-chicle">
            {">> "}Funk Tee's Store
          </Link>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <form
            className="flex flex-col pt-3 md:pt-8"
            onsubmit="event.preventDefault();"
          >
            <div className="flex pt-4 text-center">
              <img
                src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                className="rounded-full h-48 w-48"
              />
              {isEditMode ? (
                <input
                  type="file"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  required
                />
              ) : null}
            </div>
            <div className="flex flex-col pt-4">
              <label className="text-lg">Full Name</label>
              {isEditMode ? (
                <input
                  type="text"
                  value={user.fullName}
                  id="full-name"
                  required
                  autocomplete="off"
                  placeholder="John Smith"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              ) : (
                <input
                  type="text"
                  value={user.fullName}
                  id="full-name"
                  required
                  disabled="false"
                  autocomplete="off"
                  placeholder="John Smith"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            </div>

            <div className="flex flex-col pt-4">
              <label className="text-lg">Email</label>
              {isEditMode ? (
                <input
                  value={user.emailId}
                  id="emailId"
                  type="email"
                  required
                  autocomplete="off"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              ) : (
                <input
                  value={user.emailId}
                  id="emailId"
                  type="email"
                  required
                  disabled
                  autocomplete="off"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            </div>
            <input
              type="button"
              onClick={() => setIsEditMode(!isEditMode)}
              value="Edit Profile"
              className="bg-black text-white font-bold text-lg cursor-pointer hover:opacity-75 p-2 mt-8"
            />
          </form>
        </div>
      </div>
      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=800"
        />
      </div>
    </div>
  );
};

export default UserProfile;
