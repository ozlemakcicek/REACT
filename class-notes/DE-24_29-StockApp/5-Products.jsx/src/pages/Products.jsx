//! bu sayfa urunler sayfamiz.buraya urun ekleyip,purchase e atip sonra sale yapacagiz.once postmani nasil yaptik bakalim.
//*add re3quest ile create products icin bir post Produck requesti olstr.istek post olacak .App doc dan sreate products in url ve body kismini getir yapistir.headers alanina da key ve token i yaz.Body ye gore bize name(kendin ver), brand_id ve category_id lazim.o zaman, daha once olustrdgmz get_brand requestinden eklemek istedgmz brand in(marka) id sini alip productsin body sine yaz.Categories ise hazir bu projede.ona ulasalim.Yine bir get_Categories requesti olustrlm.App doc dan Categories_list alanindan url i al.token ve key i headers a ekle ve send yap(bunda body islemi yok.cunku hazir zaten sadece cekiyorz) .bize categoriler id nosu ile beraber dondu.hangi categorie ise ekledigimiz urun o id yi Post Product da categorie_id ye yazalim ve send yapalim.bize ekledigi urunu stock sayisi 0 olacak sekilde dondu.
//! simdi code lari yazalim

//*projeye gore firms ile ayni yapiyi direkt ordak copyalayablrz.ve isimleri degstrlm.Card yapimiz yok onu silelim.istek attigimiz endpoint i degistirdik.Initial value larin body yapisini degstrdk backend in istegine gore yazdk.simdi ProductModal sayfasini olusturalim




import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ProductModal from "../components/modals/ProductModal";


//! mui data grid importlari
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

//? material icons un importu
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { btnStyle } from "../styles/globalStyle";

const Products = () => {
  

  const { getStockData,deleteStockData } = useStockCall();
  const { products } = useSelector(state => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      category_id: "",
      brand_id: "",
    });
    //* handleClose olduğunda yani modal kapnadığında formdaki verilerin temizlenmesi için burada tanımladık.
  };
  const [info, setInfo] = useState({
    name: "",
    category_id: "",
    brand_id: "",
  });


//! MUI DATA GRID kullanarak Products lari ekranda tabloda gorelim.mui data grid in filtreleme,sort yapma,pagination(sayfalar arasi gecis),Column lari gizleme aciga cikartma, tablodaki verileri export ozellgni kullanarak locale csv olaark indirme ,edit scroll gibi avantajlari var.once install etmeliyiz.
//?mui den docs dan muiX den Data Grid secwerek npm deki indirme kodunu alip terminale yukleyelim.
//*Tablo icin ise Overwiev den MIT version kismi ucretsiz onun columns ve row kismini alip buraya kopileyelim.
//* yine codlardaki box ve icindeki Data Grid kismini da ProductModal den sonraya kopyalayalim


//! Column daki headerName ler basliklar.field:"id" ile rows daki id ler ayni.Kendi Projemizdeki istenilenlere gore field ve headerName leri duzenleyelim.postmandeki Post_Product dan bakablrsn
 const columns = [
   {
     field: "id",
     headerName: "#",
     minWidth: 40, //daha bundan asagi kuculme
     maxWidth: 70, // daha bundan fazla buyume
     headerAlign: "center",
     align: "center",
     flex: 1, // 1 alanlik yer kapla dedik
   },
   {
     field: "category",
     headerName: "Category",
     minWidth: 150,
     //  editable: true,  her tiklandiginda editleme demek.gerek yok
     headerAlign: "center", //Data Grid dokumanindan baktik  style da bu sekilde ortalama
     align: "center", // rowdaki degerlerin ortalanmasi icin..
     flex: 3,
   },
   {
     field: "brand",
     headerName: "Brand",
     minWidth: 150,
     //  editable: true,
     headerAlign: "center",
     align: "center",
     flex:2
   },
   {
     field: "name",
     headerName: "Name",
     //  type: "number",
     minWidth: 110,
     //    editable: true,
     headerAlign: "center",
     align: "center",
     flex:2
   },
   {
     field: "stock",
     headerName: "Stock",
     //  type: "number",
     minWidth: 110,
     //    editable: true,
     headerAlign: "center",
     align: "center",
     flex:0.8,
   },

   {
     field: "fullName", // table da row u olmayan bir FullName column u acmis.yani illaki row da olmasi sart degil
     headerName: "Actions",
     description: "This column has a value getter and is not sortable.",
     headerAlign: "center",
     align: "center",
     sortable: false,
     minWidth: 50,
     flex:1,
    
     //! Icon icin Data Grid dokumantasyonundan Columns definition dan renderCell kismini al, action bolumumuzdeki valueGetteri sil ve yerine yapistir.GridRenderCell kismi typeScript ile alakali onu da sil.Simdi burda compoonent tanimlamis biz icon koyacagiz.muide material icons a git.importunu yukari yaz buraya da ismini
     renderCell: (params) => (
       //  <strong>
       //    {params.value.getFullYear()}
       //    <Button
       //      variant="contained"
       //      size="small"
       //      style={{ marginLeft: 16 }}
       //      tabIndex={params.hasFocus ? 0 : -1}
       //    >
       //      Open
       //    </Button>
       //  </strong>
       //* material icon un importu yukarida burda adi olacak ve component seklnde yazms olacagiz.simdi artik onClick yapinca delete fonksiyonunun calismasini ve css i globalstyle da taanimladigimiz btnStyle olacak seklde yapalim. delete fonksynunu cagir yukarida ve burda kullan.

       //tikladigimizin id sine nasil ualsacagmzi gormek icin consola bakalim.react alaninda console.log yazmak icin suslu icinde yazmaliyiz.iki tane islem o.i de <></> icinde yazmaliyiz
       <>
         {/* {console.log(params)}  burda gordukki hem paramsin icinde hem de rows un icinde id yi vermis */}
         <DeleteForeverIcon
           sx={btnStyle}
           onClick={() => deleteStockData("products", params.id)}
         />
       </>
     ),
   },
 ];
//! Rows larimiz backend den gelecek.yukarida stor dan products i yakaladik.asagida da useEffect icinde cektik o zaman yine asagida rows attributune products diyeblrz
 const rows = [
   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
 ];


  useEffect(() => {
    
    getStockData("products");
    //!Modal acilinca categories ve brands in icinin dolu gelmesi icin burda istek atmamiz lazim o sayfalara.yani products sayfasina gelince onlari da getir demek bu
   getStockData("categories");
   getStockData("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Product
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
{/* 
 Data Grid deki MIT Version kismindaki Box kisminin codlarini(tablo yapan form etiketi gibi dusun) da buraya. ve importlari al yapistir  */}

{/* tablonun kenairndaki scroll un kaybolup sabit kalmasi icin  sx de verilen height i sil ve kendisi otomatik height versin ve scroll u kaldirsin diye autoHeight demeliyiz DataGrid e */}
      <Box sx={{  width: "100%" }}>
        <DataGrid
        autoHeight
          // rows={rows}
          rows={products}// bunu products olarak yaziyoruz cunku rows lari onlar dolduracak
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,  //sayfa sayisi
              },
            },
          }}
          // pageSizeOptions={[5]}
          pageSizeOptions={[5,10,28,70]} // tiklayinca sayiya o kadar urun gosterir
          // checkboxSelection ihtyc yok
          disableRowSelectionOnClick  // row a tiklayinca tum row u secmesin
        />
      </Box>
    </div>
  );
};

export default Products;


//! Data Grid css: headerAlign:"center" ile columns lari,align:"center" ile rowslari ortalariz.flex ile yazdigimiz rakam kadar yer kapla diyorz.minWidth, maxWidth.description uzerine gelince gozukur.sortable=false ile nereye yazdiysan oradaki column headerina tiklayinca sort islemlerini gosterme diyoruz.defaultu true dur.yazmasanda sort islemlerini gosterir.pageSizeOptions={[4,10,70]} gibi yazarsak bunlardan hangi rakama tiklarsak o kadar veri gosterir. DataGrid e autoHeight deyince otomatik bir height verir ve scrollu kaldirir.verilen height i da kaldirmalisin

