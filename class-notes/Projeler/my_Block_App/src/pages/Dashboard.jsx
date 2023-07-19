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


  const { getBlogData } = useBlogCalls();
  



   useEffect(() => {
     getBlogData("blogs");
   }, []);
   const {blogs}=useSelector(state=>state.blog)
console.log(blogs);
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
