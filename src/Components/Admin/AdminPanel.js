import React from 'react'
import Sidebar from './Sidebar.js';
import AdminNavbar from './AdminNavbar.js';
import AdminImg from "../../assets/Internet-go.jpg";

function AdminPanel() {
  return (
 
  <div>
 
   <AdminNavbar/>
   <div className='flex'>  
    
    
     <Sidebar/>
   
   <div className='w-full flex justify-center my-auto '><img className='bg-cover h-[90vh] px-[25vh] bg-center bg-no-repeat w-[100%]' src={AdminImg} alt='Admin' /></div>
   
   </div>

   </div>

 
  )
}

export default AdminPanel
