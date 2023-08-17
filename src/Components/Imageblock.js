import React from 'react'

function Imageblock(props) {
  return (
     <div className="md:p-2 p-1 w-1/2">
    <img
      alt="gallery"
      className="w-full object-cover h-full object-center block"
      src= {props.url}
    />
  </div>
  )
}

export default Imageblock