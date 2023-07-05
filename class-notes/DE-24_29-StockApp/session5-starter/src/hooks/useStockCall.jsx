import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSucces } from "../features/stockSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const { axiosWithToken } = useAxios();

  //   const getFirms = async () => {
  //     const BASE_URL = process.env.REACT_APP_BASE_URL;

  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //         headers: { Authorization: `Token ${token}` },
  //       });
  //       console.log(data);
  //       const url = "firms";
  //       dispatch(getSucces({ data, url }));
  //       // dispatch(getSucces({ data, url:"firms"}))
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };
  //   const getBrands = async () => {
  //     const BASE_URL = process.env.REACT_APP_BASE_URL;

  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}stock/brands/`, {
  //         headers: { Authorization: `Token ${token}` },
  //       });
  //       console.log(data);
  //       const url = "brands";
  //       dispatch(getSucces({ data, url }));
  //       // dispatch(getSucces({ data, url:"brands"}))
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };
  //! yukarıdaki gib her seferinde yazmak yerine daha modüler bir yapı kurarak tek bir fonksiyonla bir den fazla get işlemini gerçekleştirebiliyoruz
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // const getStockData = async (url) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/${url}/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     dispatch(getSucces({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  // const deleteStockData = async (url,id) => {
  //   dispatch(fetchStart());
  //   try {
  //      await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     getStockData(url);
  //     toastSuccessNotify(`${url} successfuly deleted!`)
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(`${url} not successfuly deleted!`);

  //   }
  // };
  //! istek atarken ortak olan base_url  ve token gibi değerleri her seferinde yazmak yerine axios instance kullanarak bunları orada tanımlıyoruz. Ve sonrasında sadece istek atmak istediğimiz end pointi yazmamız yeterli oluyor.
  const getStockData = async url => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      console.log(data);
      dispatch(getSucces({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      getStockData(url);
      toastSuccessNotify(`${url} successfuly deleted!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} not successfuly deleted!`);
    }
  };

  const postStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      getStockData(url);
      toastSuccessNotify(`${url} successfuly created!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} not successfuly created!`);
    }
  };
  const putStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      getStockData(url);
      toastSuccessNotify(`${url} successfuly updated!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} not successfuly updated!`);
    }
  };

  return { getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockCall;
