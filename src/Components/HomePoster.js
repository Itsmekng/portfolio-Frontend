import React, { useEffect } from "react";
import "../Components/All Css/Clock.css";

function HomePoster() {
  useEffect(() => {
    const interval = setInterval(() => {
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * 6;
      const ss = day.getSeconds() * 6;

      const hr = document.getElementById("hr");
      const mn = document.getElementById("mn");
      const sc = document.getElementById("sc");

      if (hr && mn && sc) {
        hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
      } else {
        console.error("One or more elements not found.");
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Run effect only once after initial render

  return (
    <div className=" pt-52 p-2 rounded-sm md:pt-0 md:p-0   h-screen z-9 relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
    <div className="hidden lg:block w-full h-64 lg:w-1/2 p-16 lg:h-[85vh] border border-black  dark:border-white border-solid">
      <div className="clock">
        <div className="hour">
          <div className="hr" id="hr"></div>
        </div>

        <div className="min">
          <div className="mn" id="mn"></div>
        </div>

        <div className="sec">
          <div className="sc" id="sc"></div>
        </div>
      </div>
    </div>

    <div className="max-w-lg border border-black dark:border-white border-solid  bg-transparent backdrop-blur-sm  md:max-w-2xl  md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
      <div className="flex flex-col p-12 md:px-16">
        <h2 className="text-2xl font-semibold text-black dark:text-white lg:text-4xl">
          {" "}
          &lt; <span className="text-red-700"> Made </span>{" "}
          <span className=" text-blue-600"> with </span>{" "}
          <span className="text-purple-600">MERN</span>{" "}
          <span className="text-red-500"> Stack</span> &gt;
        </h2>
        <p className="mt-4 text-black dark:text-white drop-shadow-2xl">
          is a showcase of dynamic web applications powered by MongoDB,
          Express.js, React, and Node.js, combining cutting-edge technologies
          for seamless user experiences.
        </p>

        <div className="mt-8">
          <a href="https://github.com/Itsmekng" className="text-2xl -bold text-blue-600">
            {" "}
            &lt; GitHub &gt;
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default HomePoster;
