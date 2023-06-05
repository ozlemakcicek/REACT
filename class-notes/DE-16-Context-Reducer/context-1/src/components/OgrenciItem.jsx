import React, { useContext } from "react";
import { OgrenciContext } from "../App";

const OgrenciItem = () => {
  const { ogrenci, changeRenk } = useContext(OgrenciContext);
  // console.table(ogrenci)
  // console.log(ogrenci)

  return (
    <div>
      {ogrenci.map((i) => {
        return (
          <div style={{background:i.color}}>
            <h3>NAME:{i.name} </h3>
            <h4>EMAIL:{i.email} </h4>
            <h4>AGE: {i.age}</h4>
            Color: <input type="text" value={i.color}
              
             onChange={(e)=>changeRenk(i.id,e.target.value)}

             />
           
          </div>
        );
      })}
    </div>
  );
};

export default OgrenciItem;
 {/* i.id ile tikladigimizin rengi degirssini belirttik.1 tane olsaydi gerek yoktu ama bu projede birden fazla input var */}