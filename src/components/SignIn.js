import React, { useState } from "react";

const SignIn = () => {
  const [isLoginTab, setIsLoginTab] = useState(true);

  const login = () => {
    return (
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
                  <a
                    onClick={() => setIsLoginTab(false)}
                    href="#"
                    className="font-medium text-black hover:text-grey focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Signup Here.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const signup = () => {
    return (
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div>
            <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
              Welcome! Enter your details to signup
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST">
                <div>
                  <label
                    for="full-name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="full-name"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    for="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Email Address
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

                <div className="mt-6">
                  <label
                    for="cnf-password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="cnf-password"
                      type="password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:opacity-75 focus:outline-none focus:outline-none transition duration-150 ease-in-out"
                    >
                      Sign up
                    </button>
                  </span>
                </div>
              </form>
              <div className="text-sm leading-5 mt-6">
                <p className="font-medium text-black">
                  Already Registered ?{" "}
                  <a
                    onClick={() => setIsLoginTab(true)}
                    href="#"
                    className="font-medium text-black hover:text-grey focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Login Here.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div className="min-h-screen bg-white flex">
        {isLoginTab ? login() : signup()}
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
