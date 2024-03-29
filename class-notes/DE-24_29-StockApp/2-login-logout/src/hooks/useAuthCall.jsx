//! butun Authentication fonksiyonlarini burda yaziyoruz.sonra bunlari ilgili sayfalardan import rdip kullanacagz

import axios from "axios";
//? AuthSlice da butun lazim olan redux fonksiyonlarini yaziyoruz ve ilgili yerelerde import ediyorz
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//?toastify mesajlarimizi da helper altinda bir dosya da topladik
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  //!Login fonksiyonu.parantez tek bir parametre o.i. yazilmayablr.Asagidaki URL kismi Apinin bizden istedigi.kalip o sekilde
  const login = async userInfo => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/stock");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  //! logout fonksiyonu
  const logout = async () => {
    dispatch(fetchStart());
    try {
      // let headers = {
      //   Authorization: `Token ${token}`,
      // };
      await axios.post(`${BASE_URL}account/auth/logout/`, null, {
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
  //! register fonksiyonu.

  const register = async userInfo => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/stock");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  };

  return { login, register, logout };
};

export default useAuthCall;
