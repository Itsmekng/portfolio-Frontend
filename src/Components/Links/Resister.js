import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createUser } from "../Features/User";

const signupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  avatar: Yup.mixed().required("Avatar is required"),
});

function Register() {
  
 const dispatch = useDispatch()

  const navigate = useNavigate()


  const handleClick = (e) => {
    document.getElementById("upload").click();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    avatar: null,
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
     dispatch(createUser(values))
      navigate("/")
      action.resetForm();
    },
  });

  const handleAvatarChange = (event) => {
    setFieldValue("avatar", event.currentTarget.files[0]);
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-black justify-around items-center hidden">
        <div>
          <h1 className="text-zinc-200 font-bold text-4xl font-sans">
            You Know This
          </h1>
          <p className="text-zinc-200 mt-1">
            You Can Upload Avatar Here !!! Click Below
          </p>
          <button
            onClick={handleClick}
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            id="UploadBtn"
          >
            Upload
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Welcome User
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Create Free Account Here
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.name && touched.name && <p className="form-error text-red-500 ">{errors.name}</p>}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && touched.email && <p className="form-error text-red-500">{errors.email}</p>}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.password && touched.password && <p className="form-error text-red-500">{errors.password}</p>}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.confirm_password && touched.confirm_password && <p className="form-error text-red-500" >{errors.confirm_password}</p>}
          <div className="hidden items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none h-4"
              type="file"
              name="avatar"
              id="upload"
              alt="avatar"
              onChange={handleAvatarChange}
              onBlur={handleBlur}
            />
          </div>
        

          <button
          type="button"
            onClick={handleClick}
            className=" md:hidden block border border-solid border-zinc-400 mt-4 py-2 px-2 rounded-2xl text-zinc-600 font-semibold mb-2 "
          >
            Avatar
          </button>
          {errors.avatar && touched.avatar && <p className="form-error text-red-500">{errors.avatar}</p>}
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 "
          >
            Register
          </button>
          <span className=" text-base font-semibold ml-2 hover:text-blue-500 cursor-pointer">
            <Link to="/Login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
