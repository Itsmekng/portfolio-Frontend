import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendMessage } from "../Features/ContactUs";


const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  desc: Yup.string().required("Message is required"),
});

function ContactUs() {

const dispatch = useDispatch()

const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      desc: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
   dispatch(sendMessage(values))
navigate("/")
    },
  });

  return (
    <div className="w-screen h-full md:h-screen bg-black">
 

      <form className="px-4 " onSubmit={formik.handleSubmit}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24  mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
            loading="async"
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0Chhattisgarh+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              ></iframe>
              <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-zinc-400">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                    typewriter
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a href="/" className="text-red-500 leading-relaxed">
                    example@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-500 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed text-zinc-500">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-300 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-400">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full bg-transparent rounded border border-gray-300 focus:border-zinc-200 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-300">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full bg-transparent rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="relative mb-4">
                <label htmlFor="desc" className="leading-7 text-sm text-gray-300">
                  Message
                </label>
                <textarea
                  id="desc"
                  name="desc"
                  value={formik.values.desc}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full bg-transparent rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-400 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
                {formik.touched.desc && formik.errors.desc ? (
                  <div className="text-red-500">{formik.errors.desc}</div>
                ) : null}
              </div>
              <button className="text-white bg-transparent border border-blue-500 border-solid py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default ContactUs;
