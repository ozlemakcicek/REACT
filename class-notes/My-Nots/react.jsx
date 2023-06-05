//!ONEMLI SAYFALAR:
//!DE-11-12 de details sayfasina gitme durumu
//!DE-13 styledComponentsExample
//! DE-14-15 Proje





// //! Harici bir Apiden veri alirken projeler my-Random-User a bak;
//   const [contacts, setContacts] = useState([]);
  
//   useEffect(() => {
//     const getVeri = async () => {
//       const res = await axios.get("https://randomuser.me/api/");
//       // console.log(res.data.results);
//       setContacts(res.data.results);
//     };
//     getVeri();
//   }, []);
//     console.log(contacts);

    
//   return (

//     <div className="App ">
//       {contacts.map((eleman) => {
//         return (
//           <div className="container mt-5" >
//             <div className="ust d-flex ">
//               <img className="pic" src={eleman.picture.large} alt="" />

            



//! Local deki Database den veri cekerken DE-!0-Appointment a bak:
// import { data } from "../helpers/data";


// const Home = () => {

// const [doktorlar, setDoktorlar] = useState(doktorData);

// return (
//     <div style={{display:tikla? "block" : "flex"}}>
//       <div>
//         <header className="header">
//           <h1>HOSPİTAL</h1>
//           <div className="dr">
//             {doktorlar.map((dr) => (
//               <div key={dr.id}>....


//! ya da destruction yaparak;

// import data from "../data";
// return (
//     <Container className="text-center mt-4 p-4 ">
//       <Row className="g-3">
//         {data.map(({ img, name, text, id }) => {
//           return (
//             <Col sm={12} md={6} lg={4} key={id}>
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src={img} />
//                 <Card.Body>
//                   <Card.Title>{name}</Card.Title>
                //   <Card.Text>{text}</Card.Text>
              


 //! Details sayfasi icin 3 adimli yonlendirme. localdeki datadan yukaridaki gibi veri cekince;
 
 //*1-CourseCard sayfasinda;
 
                //   <Button variant="danger"
                //   onClick={()=>navigate(`/courses/${name}`)}

//*2- App.js de yonlendirme yaparken;


                //  <Route path="/courses/:namee" element={<CardDetails />} />;

//*3- vardigi Details sayfasinda karsilanirken;

                    //  const { namee } = useParams();

        //              {data.map(
        // (i) =>
        //   i.name === namee && (
        //     <div>
        //       <h3>{i.name}</h3>
        //     </div>


        //!Fetch ile Api den veri cekme;

      
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setInsanlar(data))
  //     .catch((err) => console.log(err));
  // }, []);


  // {insanlar.map(({ id, name, phone }) => {
  //         return (
  //            <h5>{phone}</h5>)



  //!axios ile Api den veri cekme;aslinda eger get,post gibi degisiklik yapilacaksa axios u kullan.yoksa fetch ile yap

//    useEffect(() => {
//      const veriGetir = async () => {
//        const res = await axios.get(
//          "https://jsonplaceholder.typicode.com/users"
//        );
//        setInsanlar(res.data);
//      };
//      veriGetir();
//    }, []);
          