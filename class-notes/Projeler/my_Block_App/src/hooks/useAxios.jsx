import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';

const useAxios = () => {
  
      const { token } = useSelector((state) => state.auth);
    //   bizim url adresimiz: process.env.REACT_APP_BASE_URL;

    const axiosWithToken = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      //   timeout: 1000,
      headers: {
        Authorization: `Token ${token}`,
      },
    });

//tokensiz islemler icin de yapablrz
      const axiosWithPublic = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        //   timeout: 1000,
        // headers: {
        //   Authorization: `Token ${token}`,
        // },
      });

      return{axiosWithToken,axiosWithPublic}
}

export default useAxios