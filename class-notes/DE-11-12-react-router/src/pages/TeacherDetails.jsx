import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

import axios from "axios"

const TeacherDetails = () => {
  const navigate = useNavigate();
const {id}=useParams()

//burda id lazim bize data dan.sadece id yi secebilirz.data oyle yazilmis cunku.
const[kisi,setKisi]=useState({})
//bu bir obje o yuzden {} koyariz useState icine.[] de hata vermez ama dogrusu obje o.i. {} olamli

//tekrar apiden verileri cekmemiz lazim.id li cekiyoruz ki sadece o kisi nin bilgileri gelsin.

// buraya async await de yazablrz.await fetch olacak tabiki.async i bir fonksiyona esitliyoruz onun icinde await fetch yapacagiz.

 useEffect(() => {
   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((res) => res.json())
     .then((data) => setKisi(data))
     .catch((err) => console.log(err));
 }, [id]);

// url adresinin sonuna all veya users yazinca herkesi getiriyor.${id} yazarsak istedigin kisiyi getirir.Api ona gore kurgulanmis o yuzden burda mecburen id yazmaliyiz.Localden cekerken istedigin bir degiskeni yazabilirsin.
// CardDetails de oldugu gibi props gonderip tutuyorsa diy esorgulayarak da yapilabilir ama fetch li yapida,yani api den veri cekerken bu sekilde her iki sayfada da veriyi cekmek daha uygun

// get,post gibi degisiklik yapilacagi durumlarda axios kullan ama sadece veri cekme varsa fetch daha uygun

// useEffect(()=>{
// const getVeri=async()=>{
//   const res = await axios.get(
//     `https://jsonplaceholder.typicode.com/users/${id}`)
//     setKisi(res.data)

// } 
// getVeri();


// },[id])



 // useEffect de [] icini bos birakablrm.Cunku zaten bu sayfaya kisi tiklaninca o kisinin id si ile geliyor ve bu sayfa tekrar calisiyor ama syntax geregi, id ye bagli olarak veri cekiyor.o yuzden [id] yazmaliyiz.yazmazsak da hata almayiz
 
 console.log(kisi);
 

  return (
    <Container className="text-center mt-4">
      <div>
       
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
          alt=""
          width="250px"
        />
        <h4>{kisi.username}</h4>
        <h5>{kisi.name}</h5>
        <h5>{kisi.phone}</h5>
        <h5>{kisi.email}</h5>
        <div>
          <button className="btn btn-primary" onClick={()=>navigate(-1)}>GO BACK</button>
          <button className="btn btn-warning" onClick={()=>navigate("/")}>GO HOME</button>
        </div>
      </div>
    </Container>
  );
}

//herkesi api den cekip ana sayfada bastirdik.sonra birine tikladik.tikladigimizin bilgilerini Details sayfasinda yine api den cekp bastirdik.

//Go Back de bir onceki sayfanin ne oldugunu bilmedigimiz icin -1 yaziyoruz.-3 yapsan 3 sayfa one gelir.
export default TeacherDetails


//