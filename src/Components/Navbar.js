import React, { useState } from "react";
import "../Components/All Css/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Resume from ".././assets/Grey & White Clean Cv Resume (3).pdf";
import { FailedAlert } from "../Alert";
import lamp from ".././assets/lamp.png"


function Navbar() {

 const [mode , setmode] =  useState("light")



  function darkMode(){

    { mode === "dark" ? setmode("light") : setmode("dark") }
    
    const element  = document.documentElement;

   if (mode === "dark") {
    element.classList.add("dark")
   } else {
    element.classList.remove("dark")
   }
  }

  const { user, loading, error } = useSelector((state) => state.app.users);

  if (loading) {
    return <h2>Loading...</h2>; // Changed "Loading" to "Loading..." for clarity
  }

  if (error) {
    return <h2>Error: {error}</h2>; // Display error message if there's an error
  }

  return (
    <nav className="fixed top-0 z-10 block w-full max-w-full px-4 py-2 dark:text-white text-black  dark:bg-black bg-white dark:border-solid   border   rounded-none shadow-md h-max border-black dark:border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a
          href="/"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-lg font-medium leading-relaxed text-inherit antialiased"
        >
          Aman <span className="text-red-600">Sahni</span>
        </a>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-sm font-semibold antialiased dark:font-normal leading-normal text-blue-gray-900">
                <a href="/" className="flex items-center">
                  Home
                </a>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-semibold dark:font-normal leading-normal text-blue-gray-900">
                <a
                  href="https://github.com/Itsmekng"
                  className="flex items-center"
                >
                  Github
                </a>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-semibold dark:font-normal leading-normal text-blue-gray-900">
                <a href="/" className="flex items-center">
                  Project
                </a>
              </li>
             
              {user ? (
                <li className="block p-1 font-sans text-sm antialiased font-semibold dark:font-normal leading-normal text-blue-gray-900">
                  <a download={Resume} href="/" className="flex items-center">
                    Resume
                  </a>
                </li>
              ) : (
                <li className="block p-1 font-sans text-sm antialiased font-semibold dark:font-normal leading-normal text-blue-gray-900">
                  <a
                    onClick={() => {
                      FailedAlert("Please login to Access This Resource");
                    }}
                    href="/"
                    className="flex items-center"
                  >
                    Resume
                  </a>
                </li>
              )}

              {user && user.role === "Admin" ? (
                <li className="block p-1 font-sans text-sm antialiased font-semibold dark:font-normal leading-normal text-blue-gray-900">
                  <Link to="Admin" className="flex items-center">
                    Admin Panel
                  </Link>
                </li>
              ) : null}

              {user ? (
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  <Link to="/profile">
                    {" "}
                    <img
                      src={user.avatar.url}
                      alt="Profile"
                      className=" rounded-full h-8 flex items-center"
                    />
                  </Link>
                </li>
              ) : (
                <li className="block p-1 font-sans text-sm antialiased font-semibold  dark:font-normal leading-normal ">
                  <Link to="login" className="flex items-center">
                    login
                  </Link>
                </li>
              )} 
            </ul>
          </div>
          <li className="block p-1 font-sans text-sm antialiased font-semibold dark:font-normal leading-normal text-blue-gray-900">
                <button onClick={darkMode}
                
                  className="flex items-center"
                >
               <img className="bg-cover b-center h-8 " src={lamp} alt="mode" />
                </button>
              </li>
          <div className="flex items-center gap-x-1">
            <button
              className="hidden select-none bg-white dark:bg-black border-zinc-600 border border-solid rounded-xl py-2 px-4 text-center align-middle font-sans text-xs dark:font-bold font-bold uppercase text-black dark:text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"
            >
              <Link to="ContactUs">
                {" "}
                <span>Contact Us</span>{" "}
              </Link>
            </button>
          </div>
          {user ? (
            <li className="block lg:hidden p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              <Link to="/profile">
                <img
                  src={user.avatar.url}
                  alt="Profile"
                  className="rounded-full h-8 flex items-center"
                />
              </Link>
            </li>
          ) : (
            <Link
              to="/login"
              className="pr-12 text-sm text-black dark:text-zinc-300 relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button"
            >
              Login
            </Link>
          )} 

          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
