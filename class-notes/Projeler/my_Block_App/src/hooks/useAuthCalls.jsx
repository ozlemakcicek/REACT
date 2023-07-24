



import axios from "axios";


import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";





const useAuthCalls = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);


// //!hangi sayfayi root yapmak istyrsan (veriler orda gozuksun istyrsan) AppRouter da o sayfanin path ini "/" yap

// //!url icin .env deki adresi burda degiskene ata ve process.env.(.env de verdigin isim.benimkisi REACT_APP_BASE_URL)
// //!kullanirken ise hangi islemde kullanacaksan ``icinde url degisken adi ve cagiracagin amacdaki endpointi
  const BASE_URL = process.env.REACT_APP_BASE_URL;


// //! apideki reswimleri ekrana basma;







  const login = async userInfo => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/")
      
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };





  const logout = async () => {
    dispatch(fetchStart());
    try {
      // let headers = {
      //   Authorization: `Token ${token}`,
      // };
      await axios.post(`${BASE_URL}users/auth/logout/`, null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
    }
  };




  const register = async userInfo => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/register/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/login");
    } catch (err) {
   
      toastErrorNotify("Register can not be performed"); 
        dispatch(fetchFail());
    }
  };

  return { login, register, logout };

}

export default useAuthCalls;
