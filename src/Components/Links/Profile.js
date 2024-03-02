import React from 'react'
import "../All Css/Profile.css";
import { useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { Logout } from '../Features/User';
import CoverImg from "../../assets/7247.jpg"


function Profile() {
  const dispatch  =  useDispatch()
  function LogoutUser(){
      
   dispatch(Logout())
   window.location.reload() 
  
  }
  

  const { user, loading, error } = useSelector((state) => state.app.users);


  if (loading) {
    return <h2>Loading...</h2>; // Changed "Loading" to "Loading..." for clarity
  }

  if (error) {
    return <h2>Error: {error}</h2>; // Display error message if there's an error
  }


  return (

  
        
        <div  className='bg-black w-full h-screen '>


{ user ? 
            <div class="flex flex-col justify-center items-center h-[100vh] ">
                <div class="relative flex flex-col items-center rounded-[20px] border border-white border-solid w-[400px] mx-auto p-4 bg-transparent bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                    <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                        <img src={CoverImg} alt='cover' class="absolute flex h-32 w-full justify-center rounded-xl bg-cover"/> 
                        <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                            <img class="h-full w-full rounded-full" src={user.avatar.url} alt="" />
                        </div>
                    </div> 
                    <div class="mt-16 flex flex-col items-center">
                        <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                     {user.name}
                        </h4>
                        <p class="text-base font-normal text-gray-400">{user.email}</p>
                    </div> 
                    <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
                { user.role === "Admin" ?<Link to="/Admin" class="flex flex-col items-center justify-center">
                        {/* <p class="text-2xl font-bold text-navy-700 dark:text-white">17</p> */}
                        <p class="text-sm font-normal text-gray-600">Admin Panel</p>
                        </Link> : null }
                        <div class="flex flex-col items-center justify-center">
                        {/* <p class="text-2xl font-bold text-navy-700 dark:text-white">
                            9.7K
                        </p> */}
                        <p class="text-sm font-normal text-gray-600">{user.role}</p>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                        {/* <p class="text-2xl font-bold text-navy-700 dark:text-white">
                            434
                        </p> */}
                        <p onClick={LogoutUser} class="text-sm font-normal text-gray-600">Logout</p>
                        </div>
                    </div>
                </div>  
              
            </div> : <div className='text-zinc-300 flex justify-center pt-[25vh]'> Please Login <Link to="/Login" className='text-blue-500 ml-2'> Nevigate to login Page</Link></div>}



        </div>
  

  )
}

export default Profile
