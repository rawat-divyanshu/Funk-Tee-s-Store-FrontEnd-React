import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Base from "./../core/Base";
import { signin, authenticate, isAuthenticated } from "./helper";
import { ToastContainer, toast, Bounce } from "react-toastify";
import ReactLoading from "react-loading";

const Signin = () => {
  // State Declaration
  const [values, setValues] = useState({
    emailId: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { emailId, password, error, loading, didRedirect } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const performRedirect = () => {
    if (didRedirect || isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ emailId, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({ ...values, didRedirect: true });
          });
        }
      })
      .catch((err) => console.log("Signin Failed"));
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

  const signinForm = () => {
    return (
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <Link to="/" className="text-4xl md:text-3xl lg:ml-3 font-chicle">
              {">> "}Funk Tee's Store
            </Link>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-4xl font-staatliches">Welcome.</p>
            <form
              className="flex flex-col pt-3 md:pt-6"
              onsubmit="event.preventDefault();"
            >
              <div className="flex flex-col pt-4">
                <label className="text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange("emailId")}
                  value={emailId}
                  required
                  autocomplete="off"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label className="text-lg">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={handleChange("password")}
                  value={password}
                  required
                  autocomplete="off"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <input
                type="submit"
                onClick={onSubmit}
                value="Log In"
                className="bg-black text-white font-bold text-lg cursor-pointer hover:opacity-75 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="underline font-semibold">
                  Signup Here.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <ToastContainer />
      {errorToast()}
      {signinForm()}
      {performRedirect()}
    </React.Fragment>
  );
};

export default Signin;
