import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'



const blogSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    error: false,
    blogs: [],
    categories: [],
    comments: [],
    like: "",
    detail: [],
    userDetail: [],
   
   
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    getSucces: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data;
    },

   

    postLikeSuccess: (state, { payload }) => {
      state.loading = false;
      state.like = payload;
    },

    getDetSuccess: (state, { payload }) => {
      state.loading = false;
      state.detail = payload;
    },

    getCommentSuccess: (state, { payload }) => {
      state.loading = false;
      state.comments = payload;
    },

    getCategorySuccess: (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
    },

    getNewBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.blogs = [...state.blogs, { ...payload }];
    },

    // getBlogDetailData:(state,{payload})=>{
    //   state.loading=false;
    //   state.values=payload;
    // },
    getUserSuccess: (state, { payload }) => {
      state.loading = false;
      state.userDetail=payload;
    },
     fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSucces,
  fetchFail,
  postLikeSuccess,
  getDetSuccess,
  getCommentSuccess,
  getNewBlogSuccess,
  getCategorySuccess,
  getBlogDetailData,
  getUserSuccess,
} = blogSlice.actions;
export default blogSlice.reducer;
