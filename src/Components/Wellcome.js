import React from "react";
import MainImg from "../assets/IMG20240204162621.jpg";

function Wellcome() {
  return (
    <section className="border border-black dark:border-white border-solid bg-transparent m-8">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-zinc-400 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              I'm a MERN stack developer, adept in MongoDB, Express.js, React,
              and Node.js. Expertise in backend with Node.js, Express.js,
              frontend with React, and MongoDB data management. Skilled in
              full-stack development, passionate about staying current with web
              trends for high-quality solutions.
            </p>
            <div className="mt-8">
              <a href="/" className="text-blue-500 hover:text-blue-600 font-medium">
                Follow Me On Social Media
             
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={MainImg}
              alt="About Us"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wellcome;
