import React from 'react'
import { Link } from "react-router-dom"


function AboutUs() {
  return (
    <div className=" mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 h-[55h]">
      <div className="max-h-96 md:h-screen">
        <img className="w-screen h-full object-cover object-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KEwwFrgtegCVi4yvw2kfQyxt20xmKIiYp3TyZHqGoKAYgliiw8lQczt_r3RBC7Rw_3o&usqp=CAU" alt="" />
      </div>
      <div className="flex bg-gray-100 p-10">
        <div className="mb-auto mt-auto max-w-lg">
          <h1 className="text-3xl uppercase">Jun Santilla</h1>
          <p className="font-semibold mb-5">Web Developer</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
          <button className="bg-black rounded-md py-3 px-7 mt-6 text-white"><Link to="/ContactUs" >Contact Us</Link></button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUs
