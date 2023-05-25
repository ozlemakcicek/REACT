import { useState } from "react";

const HastaEkle = ({ hastalar, setHastalar }) => {
  const [isim, setIsim] = useState("");
  const [tarih, setTarih] = useState("");

  //submit olayi hemen databasae gitmesin,verileri alip gitsin alttaki kodlari alsin diye preventDefault yapmaliyiz.yoksa calismaz projemiz
  const handelSubmit = (e) => {
    e.preventDefault();

    //id nin dinamik olmasi lazim hergun yenilenmeli.bunun icin 2 yol var.1-ya guncel tarih..new Date.now()   2-ya da hastalar.length+1 seklinde
    setHastalar([...hastalar,{
      id: hastalar.length+1,
      text: isim,
      day: tarih,
      bittiMi: false,
      doktorum: doktorlar[0].doktor,
    }]);
    
    //submit sonrasi inputlardan value temizlemek icin hem alttaki islem yapilir hem de inputlarda value={isim} seklinde yazarak browser da bosluksa bosluk,isimse isim gozuksun.submit sonrasinda da bosluk gozuksun yaptik
    setIsim("")
    setTarih("")
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="form-control">
          <label htmlFor="text">Hasta Bilgileri</label>
{/* value olarak yazilan gozuksun diyoruz.ve submit den sonra inputu bosaltmak isteriz.bunun icinde setIsim("") setTarih("" yapilir.) */}
          <input
            id="text"
            type="text"
            placeholder="Add Name"
            name="text"
            onChange={(e) => setIsim(e.target.value)}
            value={isim}
          />
        </div>

        <div className="form-control">
          <label htmlFor="day">Day & Time</label>

          <input
            id="day"
            type="datetime-local"
            name="day"
            onChange={(e) => {
              setTarih(e.target.value);
            }}
            value={tarih}
          />
        </div>

        <div>
          <button className=" dok btn btn-submit" type="submit">
            <span style={{ color: "#6a0707" }}></span> İçin Kayıt Oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default HastaEkle;
