import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser , showUser } from '../Features/User.js'; // Corrected import path
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from './AdminNavbar';
import Sidebar from './Sidebar';


function AllUser() {

 
const navigate = useNavigate()

const dispatch = useDispatch();

useEffect(() => {
  dispatch(showUser());
},[dispatch] ); // Added dispatch as a dependency to useEffect

  const { users } = useSelector((state) => state.app.users); // Changed state.app to state.user


  return (
  
    <div>
 
    <AdminNavbar/>
    <div classNameName='flex'>  
     
     
      <Sidebar/>
    
    <div classNameName='w-full'>
   
   { users  ? users.map((user) => {  

      return ( 

        <div className="max-w-lg  mt-8">
        <div className="p-3 flex items-center justify-between border-b cursor-pointer hover:bg-gray-200">
            <div className="flex items-center">
                <img className="rounded-full h-20 w-20 bg-center" alt='avatar' src={user.avatar.url}/>
                <div className="ml-2 flex flex-col">
                    <div className="leading-snug text-2xl text-gray-900 font-bold">{user.name}</div>
                    <div className="leading-snug text-xl text-gray-600">{user.email}</div>
                    <div className="leading-snug text-xl text-gray-600">{user.role}</div>
                </div>
            </div>
            <button className="h-8 px-3 text-md font-bold text-red-400 border border-red-400 rounded-full hover:bg-blue-100" onClick={() => { dispatch(DeleteUser(user._id) , navigate("/AllUser")) }} >delete</button>
        </div>
       
       
    </div>

      )

 

   })  : <div classNameName=' flex justify-center my-24 text-3xl font-semibold' >You are not authorised to access this source <Link to="/" classNameName='mx-4 text-blue-500' > Click Here to Move Back </Link> </div> }


    
    </div>
    
    </div>
 
    </div>
  );
}

export default AllUser;
