// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
// import { useDispatch, useSelector } from "react-redux"
// import axios from "axios";

import react, { useState } from "react";
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modal/BrandModal";

import loadingGif from "../assets/loading.gif";
const Brands = () => {
  //     const dispatch=useDispatch()
  //   const {token} =useSelector(state=>state.auth)
  // const BASE_URL=process.env.REACT_APP_BASE_URL;

  // const getBrands=async()=>{
  //     dispatch(fetchStart())
  //   try {

  //     const { data } = await axios.get(`${BASE_URL}stock/brands`,{headers:{Authorization:`Token ${token}`}});
  //     console.log(data);

  //      const url="firms";
  //     dispatch(getSuccess({ data, url }));

  //   } catch (error) {
  //     console.log(error);

  //     dispatch(fetchFail())

  //   }
  // }
  const { getStockData } = useStockCall();
  const { brands,loading } = useSelector(state => state.stock);

  //!Lifting state up
   const [open, setOpen] =useState(false);
   const handleOpen = () => setOpen(true);
   //*BrandModal da tekrar eden handleColse ve setInfo yapisini tek bir yerden yazip dagittik.handleClose calisirken setInfoyu da calistirsin demis olyrz
   const handleClose = () => {
    setOpen(false)
  setInfo({
    name: "",
    image: "",
  });
  };

   //?firms deki islemlerin aynisi.Lifting state up yapiyoruz 
   const [info, setInfo] = useState({
     name: "",
     image: "",
   });

  useEffect(() => {
    {
      getStockData("brands");
    }
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brand
      </Button>
      {/* BrandModal componentini cagiriyoruz butonun altina yerlessin diye de burda cagirdik */}
      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        {loading ? (
          <img src={loadingGif} alt="loading..." height={500} />
        ) : (
          brands?.map((brand) => (
            <Grid item key={brand.id}>
              <BrandCard
                brand={brand}
                handleOpen={handleOpen}
                setInfo={setInfo}
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Brands;
