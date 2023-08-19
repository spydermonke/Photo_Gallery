import React from 'react';

function Imageblock(props) {
  const { url, isCurrent, isEnlarged, imagename } = props;

  const imageContainerStyle = {
    border: '2px solid gray',
    boxShadow: isCurrent ? '0 0 10px rgba(255, 0, 0, 0.6)' : 'none',
    padding: '12px',
    borderRadius: '8px',
    //display: isEnlarged ? 'block' : 'initial',
    transform: isCurrent ? 'scale(1.2)' : 'scale(1)', // Enlarge the image container
    transition: 'transform 0.3s ease-in-out', // Add a smooth transition effect
  };
  const enlargedContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: isEnlarged ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
    background: 'rgba(255, 255, 255, 0.9)',
  };

  return (
    <div className='md:p-2 p-1 w-1/3 '>
    <div
      className={`md:p-2 p-1 w-1/2 border-solid border-2 border-gray-300 mt-5`}
      style={imageContainerStyle}
    >
      <img
        alt={imagename}
        className={`w-full object-cover h-full object-center block`}
        src={url}
        onClick={isEnlarged}
      />
      <p>{imagename}</p>
      <div className=' items-center'>
        {/* ... your rename button and logic ... */}
      </div>
    </div>
    {isEnlarged && (
      <div style={enlargedContainerStyle} onClick={isEnlarged}>
        <img
          alt={imagename}
          className={`max-h-full max-w-full`}
          src={url}
        />
      </div>
    )}
  </div>
  );
}

export default Imageblock;
