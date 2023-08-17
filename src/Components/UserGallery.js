import React from 'react'
import Imageblock from './Imageblock';
import Navbar from './Navbar';

function UserGallery() {
    const existingUsers = JSON.parse(localStorage.getItem('registeredusers')) || [];
    const curr_email = localStorage.getItem('current_user');
    const user = existingUsers.find((user) => user.email === curr_email);
  return (
    <div>
        <Navbar></Navbar>
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
          {user.username}'s Gallery
        </h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Hello {user.username} this is your gallery, here you can view your Images.
        </p>
      </div>
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap ">
          {
            user.imageUrls  !==[]? 
            
            user.imageUrls.map(img=>{
                return(
                    
                        <Imageblock 
                        url = {img}></Imageblock>
                     
                )
            })
            : <div> No such data found</div>
          }
        
       
          
          
        </div>
      </div>
    </div>
  </section>
  
  </div>
  )
}

export default UserGallery