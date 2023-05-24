import { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";


const Home = () => {
  


  

  return (
    <div >
      <div>
        <header className="header">
          <h1>HOSPİTAL</h1>
          <div className="dr">
            {[].map((dr) => (
              <div>
                <img
                  // src={}
                  alt=""
                  width="180px"
                  height="150px"
                  className="btn"
               
                />
                <h4
                
                >
                  {}
                </h4>
              </div>
            ))}
          </div>
        </header>

          <HastaEkle
         
          />
      </div>

      <HastaListe
       
      />
    </div>
  );
};

export default Home;
