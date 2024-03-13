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
    console.log(user)

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
            <div class=" grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2  ">
              {data.map((project) => {
                return (
                  <div class="max-w-sm py-8 mx-4">
                    <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                      <img
                        class="rounded-t-lg"
                        src={project.projectImg.url}
                        alt=""
                      />
                      <div class="py-6 px-8 rounded-lg bg-white">
                        <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                          {project.name}
                        </h1>
                        <p class="text-gray-700 tracking-wide mb-8">
                          {project.desc}
                        </p>
                        <a
                          href={project.url}
                          class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                          Visit
                        </a>
                      </div>
                 { user ?  <Link to="/" onClick={()=> dispatch(likeProject(project._id))} class="absolute top-2 right-2 px-2 bg-white rounded-lg">
                        <span id="Like" class="text-md text-black font-medium"  >Likes {project.likes.count}</span>
                      </Link> : <div onClick={() => { SuccessAlert("please login to like this Project") }} class="absolute top-2 right-2 px-2 bg-white rounded-lg">
                        <span id="Like" class="text-md text-black font-medium"  >Likes {project.likes.count}</span>
                      </div>  }    
                    </div>
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Project;
