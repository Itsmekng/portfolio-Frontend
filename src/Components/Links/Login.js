import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginImg from '../../assets/large-detailed-road-map-of-gta-5.jpg';
import { LoginSchema } from '../../Schemas/Login';
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { LoginUser } from '../Features/User';

function Login() {

  const navigate  = useNavigate()

  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
     dispatch(LoginUser(values))
     navigate("/")
    },
  });


  return (
    <div className="h-screen bg-black">
      <section className="bg-transparent min-h-screen flex box-border justify-center items-center">
        <div className="bg-transparent rounded-2xl flex max-w-3xl p-5 items-center border border-zinc-200 border-solid">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-zinc-300">Login</h2>
            <p className="text-sm mt-4 text-zinc-400">If you are already a member, easily log in now.</p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                className="bg-transparent text-zinc-300 border-zinc-300 p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && <p className="form-error text-red-500">{errors.email}</p>}
              <div className="relative">
                <input
                  className="bg-transparent text-zinc-300 border-zinc-300 p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && <p className="form-error text-red-500">{errors.password}</p>}
              </div>
              <button className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" type="submit">Login</button>
            </form>

            <div className="mt-10 grid items-center text-gray-500 or-grid">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300  font-medium">
              <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                {/* Google icon SVG paths */}
              </svg>
              Login with Google
            </button>

            <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">Forget password?</div>

            <div className="mt-4 text-sm flex justify-between items-center container-mr">
              <p className="mr-3 md:mr-0">If you don't have an account..</p>
              <button className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">
                <Link to="/Resister">Register</Link>
              </button>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl max-h-[1600px]" src={LoginImg} alt="login form" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
