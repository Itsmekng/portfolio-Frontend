import React from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'

function DeleteUser() {
  return (
    <div>
 
   <AdminNavbar/>
   <div className='flex'>  
    
    
     <Sidebar/>
   
   <div className='w-full flex justify-center my-auto '>  <div>
      Delete User
    </div> </div>
   
   </div>

   </div>
  )
}

export default DeleteUser
