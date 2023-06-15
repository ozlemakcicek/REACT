
// bu sayfa butun lazim olan sayfalar icin gerekli islemleri tek tek degilde toplu sekilde yazip rahat yonetelim, ayni kodlari surekli yazmayalim diye yapiyoruz

import React from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { fetchFail,fetchStart } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'

// asagidaki url yi kendi api sayfamizdan aldik.account_register_create alanindan oka tiklayinca verir

const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const register = async (userInfo)=>{
        dispatch(fetchStart());
        try {
            const { data } = await axios.post(
              "http://15107.fullstack.clarusway.com/account/register/"
            );
            console.log(data);
            dispatch(registerSucces(data))
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
            
        }
    }
 
}

export default useAuthCall