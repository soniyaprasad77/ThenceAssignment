import React, { useState } from "react";
import PrimaryButton from "../components/primary-button";
import logo from "../assets/logo.svg";
import cross from "../assets/cross.svg";
import ErrorIcon from "../assets/error.svg";
import { Link } from "react-router-dom";
import Confirmation from "../components/confirmation";
import Caption from "../components/caption";
import Title from "../components/title";
const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailError: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const isDisabled = formData.name.trim() === '' || formData.email.trim() === "";
  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = true;
    // Email validation
    if (name === "email") {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    setFormData({
      ...formData,
      [name]: value,
      // Set an error state based on validation result
      [`${name}Error`]: isValid ? "" : "Enter a valid email address",
    });
    setHasShadow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true)
  };

  return (
    <>
      {!submitted ? (
        <><div className="w-full bg-white z-50 flex justify-between items-center px-10 py-2">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="mr-4" />
          </div>
          <Link to="/">
            <div
              className="flex border rounded-full justify-center items-center p-4">
              <img src={cross} alt="cross" className=" w-6 h-6" />
            </div>
          </Link>
        </div><div className="flex justify-center items-center h-screen">
            <form
              style={{ width: "588px", height: "572px" }}
              className="bg-white rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 text-center">
                <Caption caption="Registration" hasShadow={hasShadow} />
                <Title title=" Start your success Journey here!" hasShadow={hasShadow} />

              </div>
              <div className="mb-8">
                <input
                  className="shadow appearance-none border bg-[#EFEFEF] rounded-full w-full py-5 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline hover:border-[#537FF1] hover:shadow-md"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required />
              </div>
              <div className="mb-10">
                <input
                  className="shadow appearance-none bg-[#EFEFEF] border rounded-full w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-[#537FF1] hover:shadow-md"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required />
                {/* Display error message */}
                {formData.emailError && (
                  <p className="text-red-500 text-sm mt-2">
                    <img
                      src={ErrorIcon}
                      alt="error"
                      className="w-4 h-4 inline-block mr-3" />
                    {formData.emailError}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-center"
              >
                <PrimaryButton text="Submit" disabled={isDisabled}/>
              </div>
            </form>
          </div></>
      )
        :
        (
          <Confirmation />
        )
      }
    </>
  );
};

export default RegistrationPage;
