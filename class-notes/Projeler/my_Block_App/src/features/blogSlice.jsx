import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'



const blogSlice = createSlice({
  name: "blog",


  initialState: {
    loading: false, 
    error:false,
    blogs: [],
    categories:[],
    comments:[],
    likes:[],
  

  },
  reducers: {
     fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    // brandsSuccess,
    // firmsSuccess,
    getSucces: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data; // state["firms"], state["brands"] anlamlarına gelerek tek bir reducerla tüm stateleri doldurabilmiş olduk.
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
} = blogSlice.actions;
export default blogSlice.reducer;
