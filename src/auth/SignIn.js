import React from "react";
import { Link } from "react-router-dom";
import Base from "./../core/Base";

const Signin = () => {
  return (
    <Base>
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm">
            <div>
              <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST">
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="email"
                        type="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      for="password"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-black transition duration-150 ease-in-out"
                      />
                      <label
                        for="remember_me"
                        className="ml-2 block text-sm leading-5 text-black"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-5">
                      <a
                        href="#"
                        className="font-medium text-black hover:text-grey focus:outline-none focus:underline transition ease-in-out duration-150"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:opacity-75 focus:outline-none focus:outline-none transition duration-150 ease-in-out"
                      >
                        Sign in
                      </button>
                    </span>
                  </div>
                </form>
                <div className="text-sm leading-5 mt-6">
                  <p className="font-medium text-black">
                    Not Registered ?{" "}
                    <Link
                      to="/signup"
                      className="font-medium text-black hover:text-grey focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                      Signup Here.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
        </div>
      </div>
    </Base>
  );
};

export default Signin;
