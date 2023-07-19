//!rafce ile customhooku kurup,Card daki axsios islemini ortak alana tasiyorz ve return unu yapiyorz

import React from "react";
import {
  fetchFail,
  fetchStart,
  getBlogDetailData,
  getCommentSuccess,
  getDetSuccess,
  getNewBlogSuccess,
  getSucces,
  getUserSuccess,
  postLikeSuccess,
} from "../features/blogSlice";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";





const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const { axiosWithToken } = useAxios();

  const getBlogData = async (url) => {
    dispatch(fetchStart());
    console.log(url);
    try {
      const { data } = await axios.get(`${BASE_URL}api/${url}/`);
      dispatch(getSucces({ data, url }));

      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      navigate("/notfound");
    }
  };

  //   const getDetailData = async (id) => {
  //     console.log(id);
  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}api/blogs/${id}/`, {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       });

  //       dispatch(getDetSuccess(data));
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };

  // const deleteBlogData = async (url, id) => {
  //     dispatch(fetchStart());
  //     try {
  //       await axios.delete(`${BASE_URL}api/${url}/${id}/`, {
  //         headers: { Authorization: `Token ${token}` },
  //       });
  //       getBlogData(url);
  //       toastSuccessNotify(`${url} successfuly deleted!`);
  //     } catch (error) {
  //       dispatch(fetchFail());
  //       toastErrorNotify(`${url} not successfuly deleted!`);
  //     }
  //   };

    const getDetailData = async (id) => {
      console.log(id);
      dispatch(fetchStart());
      try {
        const { data } = await axiosWithToken.get(`api/blogs/${id}/`, );

        dispatch(getDetSuccess(data));
      } catch (error) {
        dispatch(fetchFail());
      }
    };


  const deleteBlogData = async (url, id) => {
      dispatch(fetchStart());
      try {
        await axiosWithToken.delete(`api/${url}/${id}/`, );
        getBlogData(url);
        toastSuccessNotify(`${url} successfuly deleted!`);
      } catch (error) {
        dispatch(fetchFail());
        toastErrorNotify(`${url} not successfuly deleted!`);
      }
    };


  const postLike = async (idd) => {
    console.log(token);
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`api/likes/${idd}/`, null, );
      console.log(data);
      dispatch(postLikeSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
    }
  };

  const postNewComment = async (comment, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/comments/${id}/`, comment);
      getComments(id);
      toastSuccessNotify(`successfuly performed!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`not successfuly performed!`);
    }
  };

  const getComments = async (id) => {
    dispatch(fetchStart());
    try {
        const { data } = await axios.get(`${BASE_URL}api/comments/${id}/`);
      dispatch(getCommentSuccess(data));
     
    } catch (error) {
      dispatch(fetchFail());
    }
  };

const postNewBlog=async(values)=>{
  dispatch(fetchStart)
  console.log(values);
  try {
   const {data}= await axiosWithToken.post(`api/blogs/`, values,)
   dispatch(getNewBlogSuccess(data)) 
  } 
  
  catch (error) {
    dispatch(fetchFail())
    
  }
}


//  const postNewBlog = async (values) => {
//    dispatch(fetchStart());
//    try {
//      const { data } = await axios.post(`${BASE_URL}api/blogs/`, values, {
//        headers: { Authorization: `Token ${token}` },
//      });
//      dispatch(getNewBlogSuccess(data));
//    } catch (error) {
//      dispatch(fetchFail);
//    }
//  };

 const getUserData=async(authorId)=>{
  dispatch(fetchStart())
  try {
     const { data } = await axiosWithToken.get(`api/blogs/?author=${authorId}`);
     console.log(data);
     dispatch(getUserSuccess(data))
  } catch (error) {
    console.log(error);
    dispatch(fetchFail);
  }
 
 }




  return {
    getBlogData,
    deleteBlogData,
    postLike,
    getDetailData,
    postNewComment,
    getComments,
    postNewBlog,
    getUserData,
  };
};

export default useBlogCalls;
