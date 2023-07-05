//! Bu componenti sayfanin uzerinde acilip yeni veri girisi yapmak icin aciyoruz.mui de modal var component altinda ordan bir yapiyi alip getiriyorsun.bu yapi basic modal yapisi.getir ve adini degistirdik FirmModal olarak
//* simdi bu sayfayi Firms syfasinda  nerde ciksin istiyorsak orda cagiralim

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
// import { useState } from "react";
import useStockCall from "../../hooks/useStockCall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

//* Firmse tasidigimiz statelerden open ve handleClose u yine buraya gonderdik ve karsilayalim simdi
//? aynı yapıyı diğer modallarda da kullancağımız için globalStyles.jsx dosyasına taşıdık oradan export edip her yerde kullanabiliyoruz.

export default function FirmModal({ open, handleClose,info,setInfo }) {

  //! bunlari parent a(Firms) cikartiyorz.Lifting state up
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  //!manuel olarak formik yapisini kurdugumuz icin butun inputlari tek bir state de toplayalim.Firms in formunda lazim ola(App dok dan gorduk bunu)degerlerin initial degerleri icin bir state aciyorz ve bir de fonksiyon yaziyoruz bunu btn imputlara tanimlamak istyrz

  //*edit islemi safhasindaki durum;  kaleme basinca handleOpen fonksiyonu calisiyor ve modal aciliyor ama tikladigimiz kartin bilgileri gelmiyor ki edit edeblelim.bunun icin;firm bilgisinde verilerimiz vardi bunu yapmak icin setInfoya veriyi vermemiz lazim.yani firmCard dan setInfoya(firmModal de) erisebilemm lazim.FirmModal ile FirmCard in ortak noktasi Firms.oraya setInfo yu tasimam lazim.Yine bir lifting state up yapacagiz ve bu kismi yoruma alacagiz

  // const [info, setInfo] = useState({
  //   name: "",
  //   phone: "",
  //   image: "",
  //   address: "",
  // });

  //! useStockCall da post islemi yaptik submit islemi yapinca simdi burda cagiralim ve handleSubmit de kullan
  //! statelerimizi lifting state up yaparak bir üst componente taşıdık oradan gerekli olan yerlere dağıtım yapabilelim. Bizim örneğimizde FirmModal componenti hem yeni firma eklemek için hemde var olan firmayı update edebilmek için kullanılıyor. Bu nedenle modalı açabilmek ve update işleminde içini doldurabilmek için Firms componentine statelerimizi taşımış olduk oradan da FirmCard componentine props yoluyla göndermiş olduk.

  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    // console.log(e.target); //!gelen veri e.handleChange hangi inputta calisiyorsa o inputu yakala demek bu
    // console.log(e.target.name); //! yakalanan o inputun sabit degerini yakala
    // console.log(e.target.value); //* o sabit degere girilen herzaman degisebilen value

    //! her zaman formik kullanmyblrz.Formlarda tek bir fonksiyon ile verileri toplamayi saglayan yapi bu oluyor.

    setInfo({ ...info, [e.target.name]: e.target.value }); 
    
    //* butun infoyu al, sonra tiklaninlanin name ine gore(asagidaki yapida her bir inputta name var ve karsiliginda address, firmname,...yaziyor), ki inputun attributlari hep string oldugu icin [] icinde yazilir,girilen degeri al.girilen name.
    //! inputların name attributelarındaki isimler ile info statetimin içindeki keyler aynı olduğu için bu şekilde tek bir fonksiyonla inputdaki verilerimi state e aktarabildim.
  };

  //*gonderdikten sonra tekrar inputlar baslangic degerine donsun,state bosalsin diyoruz.Form elementi o.i e.preventDefault() demeliyiz.Ve submit islemi ile bir post islemi yapiyoruz.axios islemlerimizi useStockCalls da toplamistik oraya gidiyoruz.donup cagirdiktan sonra burda kullaniyoruz.once post edecek verileri sonra icini bosaltacak ;

  const handleSubmit = (e) => {
    e.preventDefault();
    //* kaleme tiklayinca console da gordukki id si olan bir veri gelioyr.New Firm e tiklayinca(submit edince) bos geliyor.o zaman soyle diyecgz.verinin id si varsa putStockData calissin ki guncellesin, id si yoksa PostStockData calissin create etsin.parametre olarak da ayni seyi alacak.

    if (info.id) {
      putStockData("firms", info); //! update işleminde info dolu geldiği için içerisinde id bilgiside yer alıyor. Biz bu id üzerinden sorgulama yaparak id varsa yapacağın işlem put işlemi id yoksa yapacağın işlem post işlemi diye belirtmiş olduk.
      
    } else {
      postStockData("firms", info);
    } // fonksiyonlarda gonderme ve karsilama yerleri parametrelerin ayni olmali

    //!burayi da Firms de handleClose  a tasidik.cunku hem handleSubmit de hem de Modal in onClose inda ayni isi yapiyoruz.handleClose ve setInfo() kismi tekraar ediyor.Don't repeat yourself kaidesince  bunlariuste tasidik.yani dedikki handleClose u calistiriken setInfo yu da initial degerlerine getir.
    // setInfo({
    //   name: "",
    //   phone: "",
    //   image: "",
    //   address: "",
    // });

    // modal deki formu submit yapinca veri geliyor ekrana ama form kapanmiyor.onu kapatan fonksiyon handleClose idi.onu da handleSubmit icine  verileri gonderip ici bosaldiktan sonraya yerlestiriyorz

    handleClose(); //? submit işleminden sonra modalın kapanması için burada handleClose fonksiyonunu çağırıyoruz
  };
  //simdi bu handleSubmiti componentini form yaptigimiz Box elementine verecegiz

  console.log(info);
  //*simdi tek bir handleChange fonksiyonu ile butun degerlerimizi yakalamak istyrz ve guncellemek istyrz.icerisine diger hersey ayni kalsin geleni guncelle diyoruz.asagidaki sekilde dinamik bir yapi olustururz.

  
  //* modal in yapisi: bir useState tanimlamis ve iki tane fonksiyon yazmis.handleOpen da state i true yap yani acik olsun, handleClose da da state false yani kapali olsun diye tanimlamis.

  //! butona onClick yapinca da handleOpen calissin ve acilsin demis.
  //* open state ini Modal in kendisinde open atributunda kullanmis.open true olunca modal aciliyor.onClose attributu ise modal in disinda bir yere tiklaninca demek ve ona da handleClose u tanimlamis yani kapat.acikken saga sola bi yere tiklayinca kapaniyor mesela.

  //! Projede Modal alani ayri degil, New Firm butonuna tiklayinca aciliyor.o yuzden bu acma kapama statelerini New Firm butonuna tanitmaliyiz.Fakat alt componentten ust Componente veri akisi saglanamiyor.Redux ile gonderileblr ama her zamnada globale tasimaya gerek yok.
  //*bir baska yontem olan Lifting state up(state leri al yukari tasi) yontemi kull.Hem kalem de hem de butonda kullanaagiz bu stateleri o yuzden bu sibling lerin parentina tanitirsak her kardese vereblrz.

  return (
    <div>
      {/* biz acma kapama state ini parent a cikarttigimiz icin artik bu butonu sileblrz cunku parentta(Firms)zaten butonumuz var(New Firm) */}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

      <Modal
        open={open}
        // onClose={handleClose}
        //form dan cikinca bosalsin alan diye yine setInfo nun initial valuelara dondugu hali yazalim onClose icine bir CallBack acarak
        onClose={() => {
          handleClose();

          //!handleClose icine gomduk Firms de.tekrar tekrar ayni seyi yazmayalim diye.yukarida da ayni yapi vardi cunku.
          //   setInfo({
          //     name: "",
          //     phone: "",
          //     image: "",
          //     address: "",
          //   });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/*modal icine form yerlestirecegiz.o yuzden siliyoruz yapidaki asagidaki yazilari.Formu register sayfasindan getirip username ve name lerini degistirelim lazim olan degerler seklinde  */}

          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          {/* herbir input alani icin 3 yontemimiz var.1-klasik state yontemi 2-formik kutuphanesini kullanmk. 3-formik tarzinda manuel bir yapi kurmak.App dokdan firm create e bakinca body icin name,phone,image,adress e ihtycmz var.duzenleyelim.bir state acip initial degrlrini bos string olarak verelim */}

          {/* asagidaki yapida degisiklikler yapiyoruz.name onemli,type onemli.value ekliyoruz(tikladigimizin bilgilerini ekliyoruz demek icerigi),ve onChange fonksiyonunu tanimlyrz.required yaziyrz */}

          {/* box i form a cevirip formun avantajlarindan istifade etmek icin component={"form yaziyoruz"} */}
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            {/* bir buton olusturalim */}
            <Button variant="contained" type="submit">
              {info.id ? "Update Firm " : "Submit Fırm"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
