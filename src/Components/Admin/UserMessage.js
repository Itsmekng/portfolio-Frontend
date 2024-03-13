import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowMessage } from "../Features/ContactUs.js";
import { deleteProject } from "../Features/ContactUs.js";

function UserMessage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowMessage());
  }, [dispatch]);

  const { contactus, loading, error } = useSelector(
    (state) => state.Message.projectList // Adjusted the state slice path
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Handle the case when contactus is null or undefined
  if (!contactus) {
    return <h2>No data available</h2>;
  }

  return (
    <>
      <div className="w-screen">
        <AdminNavbar />
        <div className="flex">
          <Sidebar />

          <div className="flex justify-center my-auto mx-4">
            <div className="block">
              {contactus.map((message) => {
                return (
                  <>
                    {contactus ? (
                      <div class="p-4 mb-1 w-auto border border-zinc-200 border-solid">
                        <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                          {/* <img src="https://source.unsplash.com/75x75/?portrait" alt="" class="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"/> */}
                          <div class="flex flex-col">
                            <h4 class="text-lg font-semibold text-center md:text-left text-zinc-800">
                              {message.name} / {message.email}
                            </h4>
                            <p class="text-gray-700">{message.desc} </p>
                            <p
                              className="text-base text-zinc-600 font-medium"
                              onClick={() => {
                                dispatch(deleteProject(message._id));
                               
                              }}
                            >
                              delete
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMessage;
