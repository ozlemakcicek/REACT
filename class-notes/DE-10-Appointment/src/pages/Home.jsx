import { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import { doktorData, hastaData } from "../helper/Data";

//export default ile gonderilenler butun sayfayi import edersek,HastaListe seklinde acik suslu olmadan getiririz.ama Data dakileri parcalayarak getirirsek, ki 2 tane data vardi Data.jsx de, {} icinde getirri.ki zaten database e bakarsak export cost olanlar {} ile import edilir.export default olanlar aciktan import edilir

//home sayfaasinda yani sayfayi ilk acinca doktorlar gozukuyor onu yapacagiz home sayfasinda

const Home = () => {
  const [hastalar, setHastalar] = useState(hastaData);
  const [doktorlar, setDoktorlar] = useState(doktorData);

  const [tikla, setTikla] = useState(true);

  //asagidaki fonksiyonu getirdik ve simdi orda doktorun resmine (tiklaya) tiklayinca tersi olsun ve doktorlar dan da sadece tiklanan kalsin icin js methodlarindan filter i kullaniyoruz.filter kalici degisklik yapmaz.o yuzden setDoktorlari cagirmaliyiz.


//tiklaninca tekrar 4 doktorun oldugu sayfaya gitsin diye if..else.. yapisini yazdik
 const doktorClick = (abc) => {
     if (tikla) {
       setTikla(false);
       setDoktorlar(doktorlar.filter((i) => i.id === abc));
     } else {
       setTikla(true);
       setDoktorlar(doktorData);
     }
   };

 
  //su an tiklayinca dizimizde sadece bir doktor var.

  // gezindigimiz yerlerdeki map den sonraki ilk div e key yazalimki warninglerden temizleyelim.div yoksa baglanti yapacagimiz sayfa varsa onun tanimlamasinin yanina yazariz

  //style daki 2 suslu:biri js de ait oldugu icin.digeri react alaninda kullanildi icin.en distaki div in doktorlar ve inputlarin oldugu bir div ile hastalarin adlarinin oldugu bir div var.yani iki cocugu var.tikla true ise block yani alt alta durur bu iki div.   degilse, yan yana durur
  return (
    <div style={{display:tikla? "block" : "flex"}}>
      <div>
        <header className="header">
          <h1>HOSPİTAL</h1>
          <div className="dr">
            {doktorlar.map((dr) => (
              <div key={dr.id}>
                <img
                  src={dr.resim}
                  alt=""
                  width="180px"
                  height="150px"
                  className="btn"
                  // style={{ backgroundColor: "aqua" }} ilk home sayfasindaki goruntusu bu sekilde idi.tiklayincad degisti o yzden sonradan degstirdik
                  style={{
                    backgroundColor: tikla === true ? "aqua" : "lightgreen",
                  }}
                  onClick={() => doktorClick(dr.id)}
                />
                <h4
                  style={{
                    // backgroundColor: "aqua",
                    backgroundColor: tikla ? "aqua" : "lightgreen",
                    // borderLeft: "10px solid blue",
                      borderLeft: `10px solid ${tikla ? "blue":"green" }`,
                  }}
                >
                  {dr.doktor}
                </h4>
              </div>
            ))}
          </div>
        </header>

        {/* tiklayinca resme hastalr da gozuksun icin false iken calis true iken hiocbirsey, true iken calis false iken hicbirsey demek bu. */}
        {!tikla && <HastaEkle hastalar={hastalar} setHastalar={setHastalar} />}
      </div>

      <HastaListe hastalar={hastalar} setHastalar={setHastalar} doktorlar={doktorlar} />
    </div>
  );
};

export default Home;
