import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import { signup } from "./helper/index";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  // State Declaration
  const [values, setValues] = useState({
    fullName: "",
    emailId: "",
    password: "",
    error: "",
    success: false,
  });

  const { fullName, emailId, password, error, success } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log(process.env.REACT_APP_BACKEND);
    e.preventDefault();
    setValues({ ...values, error: false });
    signup({ fullName, emailId, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            fullName: "",
            emailId: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const signUpForm = () => {
    return (
      <div className="min-h-screen bg-white flex">
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
                        onChange={handleChange("fullName")}
                        value={fullName}
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
                        onChange={handleChange("emailId")}
                        value={emailId}
                        id="emailId"
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
                        onChange={handleChange("password")}
                        value={password}
                        id="password"
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
                        onClick={onSubmit}
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
                    <Link
                      to="/signin"
                      className="font-medium text-black hover:text-grey focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                      Login Here.
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
    );
  };

  const successToast = () => {
    if (success) {
      toast("Signup Successful. Login Now !", {
        position: "top-right",
        type: "dark",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        transition: Bounce,
      });
    }
  };

  const errorToast = () => {
    if (error) {
      toast(error, {
        position: "top-right",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        transition: Bounce,
      });
    }
  };

  return (
    <Base>
      <ToastContainer position="top-right" />
      {successToast()}
      {errorToast()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
