import React, { useState, useEffect } from 'react';
import Imageblock from './Imageblock';
import Navbar from './Navbar';

function UserGallery() {
  const existingUsers = JSON.parse(localStorage.getItem('registeredusers')) || [];
  const curr_email = localStorage.getItem('current_user');
  const user = existingUsers.find((user) => user.email === curr_email);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);
  const [showRenameInput, setShowRenameInput] = useState(false);
  const [newImageName, setNewImageName] = useState('');
  const [showImageOverlay, setShowImageOverlay] = useState(false);


  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + user.imageUrls.length) % user.imageUrls.length);
    } else if (event.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % user.imageUrls.length);
    }
    else if (event.key === 'ArrowDown') {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % user.imageUrls.length);
    }
    else if (event.key === 'ArrowUp') {
      setCurrentIndex((prevIndex) => (prevIndex - 3 + user.imageUrls.length) % user.imageUrls.length);
    } else if (event.key === 'Enter') {
      setShowImageOverlay(true);
    } else if (event.key === 'Escape') {
      setShowImageOverlay(false);
    }
  };
  
  


  const handleRemoveCurrentImage = () => {
    const updatedImageUrls = [...user.imageUrls];
    updatedImageUrls.splice(currentIndex, 1);

    const updatedUsers = existingUsers.map((u) => {
      if (u.email === curr_email) {
        return { ...u, imageUrls: updatedImageUrls };
      }
      return u;
    });

    localStorage.setItem('registeredusers', JSON.stringify(updatedUsers));
    setCurrentIndex((prevIndex) => Math.min(prevIndex, updatedImageUrls.length - 1));
  };
  const handleRenameImage = () => {
    if (!showRenameInput) {
      setShowRenameInput(true);
    }
  };
  const handleConfirmRename = () => {
    if (newImageName && user) {
      const updatedImageUrls = [...user.imageUrls];
      updatedImageUrls[currentIndex] = {
        ...updatedImageUrls[currentIndex],
        name: newImageName,
      };

      const updatedUsers = existingUsers.map((u) => {
        if (u.email === curr_email) {
          return { ...u, imageUrls: updatedImageUrls };
        }
        return u;
      });

      localStorage.setItem('registeredusers', JSON.stringify(updatedUsers));
      setShowRenameInput(false);
    }
  };



  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

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
              {user.imageUrls.length !== 0 ? (
                user.imageUrls.map((img, index) => (
                  // <div  className='md:p-2 p-1 w-1/3 sm: p-2 w-full'>
                  <Imageblock key={index}
                    url={img.url}
                    imagename={img.name}
                    isCurrent={index === currentIndex}
                    // onRemove={() => handleRemoveImage(index)}
                    isEnlarged={showImageOverlay && index === currentIndex}
                    onRename={handleRenameImage}
                  />
                  // </div>
                ))
              ) : (
                <div>OOPS! Please add Images First</div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-8 space-x-4">
        {showRenameInput ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md w-full"
              placeholder="Enter new name"
              value={newImageName}
              onChange={(e) => setNewImageName(e.target.value)}
            />
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              onClick={handleConfirmRename}
            >
              Rename
            </button>
          </div>
        ) : null}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRemoveCurrentImage}
        >
          Delete Image
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRenameImage}
        >
          Rename Image
        </button>
      </div>

    </div>
  );
}

export default UserGallery;
