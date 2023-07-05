//!rafce ile customhooku kurup,Card daki axsios islemini ortak alana tasiyorz ve return unu yapiyorz





import React from 'react'
import { fetchFail, fetchStart,getSucces } from "../features/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify';



const useBlogCalls = () => {
  const dispatch = useDispatch();
   const {token} = useSelector(state=>state.auth)
  const BASE_URL = process.env.REACT_APP_BASE_URL;

//!birkac yerde kullanacagimz icin dinamik hale donstrlm
//   const getCards = async () => {
//     dispatch(fetchStart());

//     try {
//       const { data } = await axios.get(`${BASE_URL}api/blogs/`, {
//         headers: { Authorization: `Token ${token}` },
//       });
//       dispatch(getSucces({ data, url: "cards" }));

//       console.log(data);
//     } catch (error) {
//       dispatch(fetchFail());
//       console.log(error);
//     }
//   };


//   return {getCards}




  
  const getBlogData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.get(`${BASE_URL}api/${url}/`
      );
      dispatch(getSucces({ data, url }));

      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };






  
    const deleteBlogData = async (url, id) => {
      dispatch(fetchStart());
      try {
        await axios.delete(`${BASE_URL}api/${url}/${id}/`, {
          headers: { Authorization: `Token ${token}` },
        });
        getBlogData(url);
        toastSuccessNotify(`${url} successfuly deleted!`);
      } catch (error) {
        dispatch(fetchFail());
        toastErrorNotify(`${url} not successfuly deleted!`);
      }
    };




  return { getBlogData,deleteBlogData };
}

export default useBlogCalls
 