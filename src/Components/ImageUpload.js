import React, { useState } from 'react';

function ImageUpload() {
  const existingUsers = JSON.parse(localStorage.getItem('registeredusers')) || [];
  const curr_email = localStorage.getItem('current_user');
  const user = existingUsers.find((user) => user.email === curr_email);

  const [imageUrl, setImageUrl] = useState('');
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('current_user')));
  // const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');



  const handleUpload = (e) => {
    e.preventDefault();

    if (imageUrl && imageName  && user) {
      const newImage = {
        url: imageUrl,
        name: imageName,
        
      };

      user.imageUrls.push(newImage);
      localStorage.setItem('registeredusers', JSON.stringify(existingUsers));

      // Clear input fields after uploading
      setImageUrl('');
      setImageName('');
    
    }
  };

  return (
    <div className='py-4 w-1/2'>
      <form>
        {loggedIn ? (
          <div className='mb-6'>
            <label
              htmlFor='url'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Image Link to be added
            </label>
            <input
              type='text'
              id='url'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='....'
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
            <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Image Name
            </label>
            <input
              type='text'
              id='name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Image Name'
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              required
            />

          
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-5'
              onClick={handleUpload}
            >
              Submit
            </button>
          </div>
        ) : (
          <div role='alert'>
            <div className='bg-red-500 text-white font-bold rounded-t px-4 py-2'>Attention</div>
            <div className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
              <p>Login to Use our Gallery feature.</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default ImageUpload;
