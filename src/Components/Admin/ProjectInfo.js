import React, { useEffect } from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { ShowProject, deleteProject } from '../Features/Project';


function ProjectInfo() {

    const dispatch = useDispatch();

 
    const { data } = useSelector(
      (state) => state.project.projectList
    ); // Changed state.app to state.user

    
  
    useEffect(() => {
      dispatch(ShowProject());
    }, [dispatch]); // Added dispatch as a dependency to useEffect
  
  


  return (
    <div>
 
    <AdminNavbar/>
    <div className='flex'>  
     
     
      <Sidebar/>
    
    <div className='w-full  m-8 '>
        
   




{ data ? data.map((project) => {
return (
    <div class="flex gap-8 h-[65vh]  mb-8 ">
    <div class="bg-white rounded-lgshadow-lg overflow-hidden max-w-lg w-full border border-zinc-300 border-solid rounded-xl">
    <img src={project.projectImg.url} alt="Mountain" class="w-full h-64 object-cover"/>
    <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-2">{project.name}</h2>
        <p class="text-gray-700 leading-tight mb-4">{project.desc}
        </p>
        <div class="flex justify-between items-center">
            <div class="flex items-center">
                {/* <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" class="w-8 h-8 rounded-full mr-2 object-cover"/> */}
                <span class="text-gray-800 font-semibold">Likes {project.likes.count}</span>
            </div>
            <span onClick={() => { dispatch(deleteProject(project._id) , window.location.reload()) }} class="text-gray-600 border border-zinc-300 py-1 px-3 rounded-lg">delete</span>
        </div>
    </div>
</div>
<div className=" w-full overflow-scroll h-full scroll-smooth border overflow-x-hidden over py-2 px-4 border-zinc-300 border-solid  rounded-lg text-zinc-900" >
{  project.likes.users.map((hello) => {
    return <div>{hello.email}</div>
}) }
</div>
</div>

)



 })  : null}

   
</div>


  
    
    </div>
 
    </div>
 
  )
}

export default ProjectInfo
