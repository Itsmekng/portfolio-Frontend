import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeProject, ShowProject } from "./Features/Project";
import { LogedUser } from "./Features/User";
import { SuccessAlert } from "../Alert";
import { Link } from "react-router-dom";

function Project() {

  const dispatch = useDispatch();


 
  const { data } = useSelector(
    (state) => state.project.projectList
  ); // Changed state.app to state.user


  
  const { user } = useSelector((state) => state.app.users);


  useEffect(() => {
    dispatch(LogedUser())
    dispatch(ShowProject());
  }, [dispatch]); // Added dispatch as a dependency to useEffect




  
  return (
    <>
      {data ? (
        <section class="py-6 px-6 text-black dark:text-white">
          <div class="container  mx-auto space-y-8">
            <div class="space-y-2 text-center">
              <h2 class="text-3xl font-bold">Projects</h2>
              <p class="font-serif text-md text-black dark:text-zinc-300">
                Here my some resent or old Projects
              </p>
            </div>
          


            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 md:px-20">



{ data.map((project) => {    

 return ( <>
 
 <div class="border border-zinc-500 border-solid max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
    <div class="relative">
        <img class="w-full" src={project.projectImg.url} alt="Product Image"/>
        <div class="absolute top-0 right-0 bg-red-500  text-white px-2 py-1 m-2 rounded-md text-sm font-medium">Likes {project.likes.count}
        </div>
    </div>
    <div class="p-4">
        <h3 class="text-lg font-medium mb-2">{project.name}</h3>
        <p class="text-gray-300 text-sm mb-4">{project.desc}</p>
        <div class="flex items-center justify-between">
           
            <a href={project.url} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Visit
      </a>
        </div>
    </div>
</div>
   
 
 
 </>)

})  }

         



   


  
  

   


</div>








          </div>
        </section>
      ) : null}
    </>
  );
}

export default Project;
