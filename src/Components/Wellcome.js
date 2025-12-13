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
              I am a passionate developer with strong problem-solving
              skills and hands-on experience in software development.
              With a solid background in ColdFusion and a growing
              focus on MERN technologies, I look forward to
              contributing effectively and am available to take
              responsibility.
            </p>
            <div className="mt-8">
              <a href="https://www.linkedin.com/in/aman-sahni-864265237/" className="text-blue-500 hover:text-blue-600 font-medium">
                Connect with me on LinkedIn
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
