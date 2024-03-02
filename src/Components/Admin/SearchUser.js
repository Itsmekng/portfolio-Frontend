import React from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'


function SearchUser() {
  return (
    <div>
 
   <AdminNavbar/>
   <div className='flex'>  
    
    
     <Sidebar/>
   
   <div className='w-full flex justify-center my-auto '> <div>
      Search by Id
    </div></div>
   
   </div>

   </div>
  )
}

export default SearchUser
