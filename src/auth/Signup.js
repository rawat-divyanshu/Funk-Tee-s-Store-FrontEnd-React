import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup, isAuthenticated } from "./helper/index";
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

  const isAlreadyLoggedIn = isAuthenticated();

  const performRedirect = () => {
    if (isAlreadyLoggedIn && isAlreadyLoggedIn["user"]) {
      return <Redirect to="/" />;
    }
  };

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
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
            <Link to="/" className="text-4xl md:text-3xl lg:ml-3 font-chicle">
              {">> "}Funk Tee's Store
            </Link>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-4xl font-staatliches">Join Us.</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onsubmit="event.preventDefault();"
            >
              <div className="flex flex-col pt-4">
                <label className="text-lg">Full Name</label>
                <input
                  type="text"
                  onChange={handleChange("fullName")}
                  value={fullName}
                  id="full-name"
                  required
                  autocomplete="off"
                  placeholder="John Smith"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label className="text-lg">Email</label>
                <input
                  onChange={handleChange("emailId")}
                  value={emailId}
                  id="emailId"
                  type="email"
                  required
                  autocomplete="off"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label className="text-lg">Password</label>
                <input
                  onChange={handleChange("password")}
                  value={password}
                  id="password"
                  type="password"
                  required
                  autocomplete="off"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <input
                type="submit"
                onClick={onSubmit}
                value="Register"
                className="bg-black text-white font-bold text-lg cursor-pointer hover:opacity-75 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Already have an account?{" "}
                <Link to="/signin" className="underline font-semibold">
                  Login Here.
                </Link>
              </p>
            </div>
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
    <React.Fragment>
      <ToastContainer position="top-right" />
      {successToast()}
      {errorToast()}
      {signUpForm()}
      {performRedirect()}
    </React.Fragment>
  );
};

export default Signup;
