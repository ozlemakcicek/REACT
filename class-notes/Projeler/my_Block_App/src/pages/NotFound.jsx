import React from 'react'
import myNotImage from "../assets/loading-yellow.gif"
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <img
        src={myNotImage}
        alt="fgds"
      />
    </div>
  );
}

export default NotFound