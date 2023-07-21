import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/blog/Card'
import useBlogCalls from '../hooks/useBlogCalls'


const MyBlogs = () => {

  const {getUserData}= useBlogCalls()
  const { userDetail} = useSelector((state) => state.blog);
  console.log(userDetail);
const {currentUserId}=useSelector((state)=>state.auth)
  useEffect(() => {
    getUserData(currentUserId);
  }, []);


 
  return (
    <>
   
  
      <Grid container
        
       
        xs={10} 
        sx={{
          display: "flex",
        
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
         
      
         
       
        }}
      >
      {userDetail?.map((blog)=> 
    (  <Grid item key={blog?.id}>
    
      <Card blog={blog}  />
  
    </Grid>)
    
)}
         
    </Grid>
  </>
  )
}

export default MyBlogs