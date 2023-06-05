import { useState } from "react";
import load from "./img/loading-loading-gif.gif";

const UseStateExample = () => {
 

  const fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
     console.log(data)
      })
      .catch(() => {
     
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        disabled
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
    
    </div>
  );
};

export default UseStateExample;
