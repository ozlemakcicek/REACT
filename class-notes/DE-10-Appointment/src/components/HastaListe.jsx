import React from "react";
import { FaTimesCircle } from "react-icons/fa";


const HastaListe = ({ hastalar, setHastalar,doktorlar }) => {
  // map den sonra {} varsa return de lazim.bikac islem varsa {} sart.o varsa return de sart
{/* react 3 esittir ister */}
console.log(doktorlar);


  return (
    <div>
      {hastalar.map((hasta) => {
        return (
          <div key={hasta.id}>
            {/* return tek bir div istedigi icin sartimizi o divin altindan baslattik.uzunlugu>1 ise yani ana sayfada herseyi bastir yaptik.bunun bitimine de else ile devam edecegiz ve hepsini bir kez daha yazmamiz lazim */}
            {doktorlar.length > 1 ? (
              <div
                className={hasta.bittiMi ? "trueBittiStil" : "falseBitmediStil"}
                // datadaki durumu degistiriyor ondoubleClick.hastalar icinde dolas ve dolastiklarinin id sine bak(dizi.id). sonra hasta.id(tikladigin kisinin id si) ne bak ikisi esitmi demek bu.esit ise bittimi sini degistir.ama diger verileri de getir.className kismi ekrandaki ustu cizili olan kismi yapiyor
                onDoubleClick={() =>
                  setHastalar(
                    hastalar.map((dizi) =>
                      dizi.id === hasta.id
                        ? { ...dizi, bittiMi: !dizi.bittiMi }
                        : dizi
                    )
                  )
                }
              >
                {/* hicbirsey yapmayinca butun hastalar ve doktorlar gozukurken,doktora tiklayinca sadece onun hastalari gozuksun algoritmasi...:ilk durumda istedigin sarta tutunabilirsin.z.B. array in length i>1 ya da ===4 ise hepsini goster.ya da butona tiklanmazsa hepsini goster, ya da background rengi mavi ise gibi... */}

                <div>
                  <h2>{hasta.text}</h2>
                  <h4>{hasta.day}</h4>
                  <h3>{hasta.doktorum}</h3>
                </div>
                <FaTimesCircle
                  style={{ color: "red" }}
                  onClick={() =>
                    setHastalar(hastalar.filter((a) => a.id !== hasta.id))
                  }
                />
              </div>
            ) : (
              doktorlar[0].doktor === hasta.doktorum && (
                <div
                  className={
                    hasta.bittiMi ? "trueBittiStil" : "falseBitmediStil"
                  }
                  onDoubleClick={() =>
                    setHastalar(
                      hastalar.map((dizi) =>
                        dizi.id === hasta.id
                          ? { ...dizi, bittiMi: !dizi.bittiMi }
                          : dizi
                      )
                    )
                  }
                >
                  <div>
                    <h2>{hasta.text}</h2>
                    <h4>{hasta.day}</h4>
                    <h3>{hasta.doktorum}</h3>
                  </div>
                  <FaTimesCircle
                    style={{ color: "red" }}
                    onClick={() =>
                      setHastalar(hastalar.filter((a) => a.id !== hasta.id))
                    }
                  />
                </div>
              )
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HastaListe;
