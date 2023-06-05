import React from "react";
import { useContext } from "react";
import { KullaniciContext } from "../App";


const AnaUser = ({kullanici}) => {
//  const{kullanici,degistirWidth}=useContext(KullaniciContext)
//boyle de yazabilirsin ama zaten bir ustunde babasinda cagirilmisti ordan da devam ettireblrsin.ordan props ile gonder burda karsila ve dolsirken kullan

const{degistirWidth} = useContext(KullaniciContext)

  return (
    <div>
      {kullanici.map((i) => {
        return (
          <div key={i.id}>
            <h3>{i.login}</h3>
            <img src={i.avatar_url} alt="" width={i.width} />

            <div>
              <label htmlFor={i.id}>Image width(px)</label>
              <input
                id={i.id}
                type="number"
                onChange={(e)=>degistirWidth(i.id,e.target.value)}
               
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnaUser;
