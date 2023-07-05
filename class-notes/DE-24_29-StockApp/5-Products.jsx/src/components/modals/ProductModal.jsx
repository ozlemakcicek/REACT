//! bu sayfayi da BrandModal dan copyalayalim.isim degiskliklerini yapalim.update islemi yok put u silelim.put olmadigi icin if else kontrolune gerek yok.Butondaki kontrolu de kaldir.image kismi yok modal de onu da silelim.ve text inputunun label ini Produkt yapalim.ve bize bir select alani lazim.bunun icin mui den getirecegz yine.Form yani burda Box altina categories ve brand icin ayri ayri yapistiriyorz.importlarini da getirip ypistiralim.value daki age degerini silelim age yok bizde.inputLabel isimlerini duzenleyelim.bizim App doc da name categorie id ve brand id vardi  name olarak categorie id ve brand id yi yazalim.label lari degistrlm.value olarak bu name leri yakalatalim
//* MenuItem lar bizim select acilincaki gelen degerler.backend den gelen degerler olacak bunlar ve bunlari tek tek yazmayacagiz tabiki.yani brands leri alip onlari map leyip ekrana basmamiz lazim.dinamik bir sekilde olacak boylece.bunun icin brands ve categories e ulasalim.useSelector ile getirelim.simdi bu ikisini basacagiz MenuItem a.once map leyelim


import React from "react";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import useStockCall from "../../hooks/useStockCall";


// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"; //bu sekilde de olur ama aslinda ayri ayri import istyr.koca kutuphaneden degilde direkt adres belirtiyoruz asagidaki sekilde git select den al gibi

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";


export default function ProductModal({ open, handleClose, info, setInfo }) {
  const { postStockData } = useStockCall();
  const{brands,categories} = useSelector(state=>state.stock)

  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

   
      postStockData("products", info);
   
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="category_id"
            value={info?.category_id}
            label="Category"
            onChange={handleChange}
          >
            {/* bir jsx kismi aciyoruz ve map leyecegizitem deyip MenuItem i return et diyorz.value olarak ise select id ile donduruyor onu yazmaliyiz gorunmeyen tarafa ve gorunen tarafta da select acilinca isimleri geliyor.bu da postmande name icinde tutulmus gozkyr.gozuken alan acma kapamanin ortasi */}
            {categories?.map((item) => (
              <MenuItem value={item.id}>{item.name}</MenuItem>
            ))}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="brand_id"
            value={info?.brand_id}
            label="Brand"
            onChange={handleChange}
          >
          {/* brands de de bakiyorz ki postman den yine veriler id ve name olarak gelmis.ayni yapi yani usttekin in.submit olunca products a burdan gelen info verisini gondermis olacak ustte yazdik.Fakat alanlarimizin dolmasi icin product sayfamizda bildirmemz lazim.kullanici products a gelince categories ve brands e istek at diye getStockData ile bildirelim */}
            {brands?.map((item) => (
              <MenuItem value={item.id}>{item.name}</MenuItem>
            ))}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>

        <Box sx={flexColumn} component={"form"} onSubmit={handleSubmit}>
          <TextField
            label="Product Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info?.name}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="contained" size="large">
            Submit Product
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
