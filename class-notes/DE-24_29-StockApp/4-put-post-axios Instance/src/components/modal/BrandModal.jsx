//!//! Bu componenti sayfanin uzerinde acilip yeni veri girisi yapmak icin aciyoruz.mui de modal var component altinda ordan bir yapiyi alip getiriyorsun.bu yapi basic modal yapisi


import * as React from 'react';
import Box from '@mui/material/Box';


import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { useState } from "react";
import useStockCall from '../../hooks/useStockCall';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

//mui nin sitesinden component altindan modal yapisini aldik getiridik ismini degistirdik.ve bunu Brands sayfasinda ilgili yerde (butonun altinda ) cagiralim.
//* asagidaki state ler acma kapama icin kullanilir ama bunlari hem kalem de hem butonda kullanacagimiz icin ust parenta tasiriz ki siblingler alabilsin.oraya tasiyip tekrar buraya gonderip karsilayacagiz lazim olanlari

export default function BrandModal({open ,handleClose, info,setInfo}) {
    //!Lifting state up
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);




//! Form da lazim olan degerlerin inital degerlerini bos string olacak sekilde bir state olarak tanimlyrz

// const[bilgi, setBilgi]=React.useState()  //! bu selkilde yazim tek bir defa useState kullanilacaksa useState i Reacct icinden al demek.yukarida baska bir import istemez useState icin ama React in import edilmesi lazim.

//* Textfield lerin id veya name isimleri ile initial deger keyleri ayni isme sahip olursa dinamik bir sekilde stateleri doldurablrz.farkli verirsek yeni bir veri olusturur.bu proje icin istemiyoruz yeni bir veri olusmasini o yuzden App.dok daki istenilen sekilde yazdik.
//bunu brands a tasidik
// const[info, setInfo]=useState({
//   name:"",
//   image:"",
// })

const {postStockData,putStockData}=useStockCall()
//!FormModaldeki aciklamalara bak

const handleChange = (e )=> {
 
  e.preventDefault();
   const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  //*imputun attribut lari herzaman string o.i.[] icinde yazilir.

//*gonderdikten sonra tekrar inputlar baslangic degerine donsun, state bosalsin diyoruz.Form elementi oldugu icin e.preventDefaulr() diyoruz.Submit islemi ile veriler post ediliyor.axios methodlarini useStockCalls da yaziyorduk.oraya gidiyoruz;

const handleSubmit=(e)=>{
  e.preventDefault();


  if(info.id){
putStockData("brands",info)
}
else
 { postStockData("brands", info)};

  // setInfo({
  // name:"",
  // image:"",})

  handleClose()
  
};

// console.log(info);

// stateleri modal in gozukecegi sayfaya tasidiktan sonra artik bu butona ihtiyac yok.o sayfadaki Brands butonuna tiklayinca calisacak 
      // <Button onClick={handleOpen}>Open modal</Button> 
  return (
   
      
      <Modal
        open={open}
        // onClose={handleClose}
        //form dan cikinca bosalsin alan diye yine setInfo nun initial valuelara dondugu hali yazalim onClose icine bir CallBack acarak
         onClose={handleClose}
       
          // setInfo({
          // name:"",
          // image:"",})
          
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {/* 5-Products kismi icin sx icin hem brand da hem firms de hem de diger product da falkan kullaancgmz icin tek tek yazmak yerine bir styles klasoru acip icine de globalStyle.jsx file inda tanimlayip gerekli yerlerde orayi cagiriyrz */}
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          {/* herbir input alani icin 3 yontemimiz var.1-klasik state yontemi 2-formik kutuphanesini kullanmk. 3-formik tarzinda manuel bir yapi kurmak */}

          {/* biz burda form degilde box submiti kullandik.bunu component attributu ile box i form a cevireblrz */}
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}  //box a form ozelligi vermek icin bu sekilde yaziyorz
            onSubmit={handleSubmit}
          >
            <TextField
              label="Brand Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info?.name} //value vermenin avantaji;1-kalem ile editleme isleminde inputlari dolu bir sekilde getirecek 2- hem de inputtaki degerleri kolayca silebiliriz
              onChange={handleChange}
              required
            />

           
          <TextField
            label="Image Url"
            name="image"
            id="image"
            type="url"
            variant="outlined"
            value={info?.image}
            onChange={handleChange}
              required
            />
            {/* bir buton ekleyelim.yalniz biz burda form degilde box submiti kullandik.bunu component attributu ile box i form a cevireblrz*/}
            <Button variant="contained" type="submit">

             {info.id?"Update Brand":"Submit Brand" }
            </Button>
          </Box>
        </Box>
      </Modal>

  );
}