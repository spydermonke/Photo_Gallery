import React from 'react';

function Imageblock(props) {
  const { url, isCurrent, imagename } = props;

  const imageContainerStyle = {
    border: '2px solid gray',
    boxShadow: isCurrent ? '0 0 10px rgba(255, 0, 0, 0.6)' : 'none',
    padding: '12px',
    borderRadius: '8px',
    transform: isCurrent ? 'scale(1.2)' : 'scale(1)', // Enlarge the image container
    transition: 'transform 0.3s ease-in-out', // Add a smooth transition effect
  };

  return (
    <div className='md:p-2 p-1 w-1/3'>
      <div className="md:p-2 p-1 w-1/2 border-solid border-2 border-gray-300" style={imageContainerStyle}>
        <img
          alt="gallery"
          className="w-full object-cover h-full object-center block"
          src={url}
        />
        <h3>{imagename}</h3>
     
       
      </div>
    </div>
  );
}

export default Imageblock;
