import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CreateProjects } from '../Features/Project.js';

function CreateProject() {

  const navigate = useNavigate();

  const [data, setdata] = useState({
    name: "",
    desc: "",
    url: "",
    projectImg: null, // Initialize as null
  });

  function ProjectData(e) {
    
    const { name, value, type } = e.target;
  
    if (type === "file") {
      const file = e.target.files[0]; // Get the first selected file
      console.log(file); // Check if file is correctly obtained
      setdata((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      setdata((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    
      e.preventDefault();
      dispatch(CreateProjects(data));
  navigate("/")
      
   
  };



  return (
   
       <div>
 
 <AdminNavbar/>
 <div classNameName='flex'>  
  
  
   <Sidebar/>

   <div className="w-screen h-full py-12 grid max-w-screen-xl grid-cols-1 gap-8   mx-auto rounded-lg md:grid-cols-2 px-12 bg-zinc-100 text-zinc-900">
	<div className="flex flex-col ">
		<div className="space-y-2">
			<h2 className="text-3xl font-bold leadi lg:text-4xl">Create Project Here</h2>
			<div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
		</div>
		<img src="https://t3.ftcdn.net/jpg/04/51/39/92/360_F_451399234_4ue5KX3bU2XKlgqFCJPd3Tsgv6cuLDLM.jpg" alt="" className="p-2 pt-8 h-[55vh] "/>
	</div>
	<form onSubmit={handleSubmit} novalidate="" className=" py-20 space-y-6">
		<div>
			<label for="name" className="text-sm">Project Name</label>
			<input id="name" name='name' type="text" placeholder="" className="border border-solid border-black w-full p-3 rounded bg-zinc-100" onChange={ProjectData} />
		</div>
		<div>
			<label for="url" className="text-sm">Url</label>
			<input id="email" name='url' type="text" className="border border-solid border-black w-full p-3 rounded bg-zinc-100" onChange={ProjectData} />
		</div>
		<div>
			<label for="desc" className="text-sm">Description (100 word)</label>
			<textarea id="message" name='desc' rows="3" className="border border-solid border-black w-full p-3 rounded bg-zinc-100" onChange={ProjectData} ></textarea>
		</div>
    <input name="projectImg" id="Upload" type="file" classNameName='hidden' onChange={ProjectData} />
    <div className=" p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900" onClick={() =>{ document.getElementById("Upload").click() }} >Project Image</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Create Project</button>
	</form>
</div>

 





 
 </div>

 </div>

  )
}

export default CreateProject
