import { useState } from "react";

const HastaEkle = () => {
 
  return (
    <div>
      <form >
        <div className="form-control">
          <label htmlFor="text">Hasta Bilgileri</label>

          <input
            id="text"
            type="text"
            placeholder="Add Name"
            name="text"
          />
        </div>

        <div className="form-control">
          <label htmlFor="day">Day & Time</label>

          <input
            id="day"
            type="datetime-local"
            name="day"
           
          />
        </div>

        <div>
          <button className=" dok btn btn-submit" type="submit">
            <span style={{ color: "#6a0707" }}></span> İçin
            Kayıt Oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default HastaEkle;
