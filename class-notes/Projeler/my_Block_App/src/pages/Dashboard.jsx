import React, { useEffect, useState } from 'react'

import { fetchFail, fetchStart, getSucces } from "../features/blogSlice";
import axios from "axios";



import useAuthCalls from "../hooks/useAuthCalls";
import { useDispatch, useSelector } from 'react-redux';
import useBlogCalls from '../hooks/useBlogCalls';
import { Grid } from '@mui/material';
import Card from "../components/blog/Card"






const Dashboard = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  //Custom hook a tasiyalim
  //  const getCards = async () => {
  //    dispatch(fetchStart());

  //    try {
  //      const { data } = await axios.get(`${BASE_URL}api/blogs/`, {
  //        headers: { Authorization: `Token ${token}` },
  //      });
  //      dispatch(getSucces({ data, url: "cards" }));

  //      console.log(data);
  //    } catch (error) {
  //      dispatch(fetchFail());
  //      console.log(error);
  //    }
  //  };

  //  useEffect(() => {
  //    getCards();
  //  }, []);

  const { getBlogData } = useBlogCalls();
  const {blogs}=useSelector(state=>state.blog)



   useEffect(() => {
     getBlogData("blogs");
   }, []);

 return (
   <>
     <Grid container>
       {blogs?.map((blog) => (
         <Grid item key={blog.id} >
        
           <Card blog={blog} />
         
         </Grid>
       ))}
     </Grid>
   </>
 );

}

export default Dashboard
