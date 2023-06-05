import React from "react";


const AnaUser = () => {
 

  return (
    <div>
      {[].map((i) => {
        return (
          <div key={i.id}>
            <h3>{}</h3>
            <img src="" alt="" />

            <div>
              <label htmlFor={i.id}>Image width(px)</label>
              <input
                id={i.id}
                type="number"
               
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnaUser;
