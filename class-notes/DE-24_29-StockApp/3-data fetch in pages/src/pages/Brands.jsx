// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
// import { useDispatch, useSelector } from "react-redux"
// import axios from "axios";


import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";




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
const { brands } = useSelector((state) => state.stock);

useEffect(() => {
  {
    getStockData("brands");
  }
}, []);

  return <div>
      <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>
      <Button variant="contained">New Brand</Button>
      <Grid container sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:4}}>
{
  brands?.map(brand=>(
    <Grid item key={brand.id}>
      <BrandCard brand={brand}/>
    </Grid>
    ))
  }
      </Grid>
    </div>;
  
}
 


export default Brands
