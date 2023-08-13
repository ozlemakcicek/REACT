
import React from 'react'
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Typography } from '@mui/material';

const FooTer = () => {
    
  return (
    <Box
  sx={{
    mt: 3,
    textAlign: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#f8f8f8",
    padding: "1rem 0",
  }}
>
      <Typography variant='body2'
        style={{
         
      backgroundColor:"lightgrey",
          height: "5vh",
           //marginTop:"43rem",
          textAlign: "center",
          width: "100%",
          
        }}
      >
        Copyright © Developed By Özlem {new Date().getFullYear()}
      </Typography>
        
      
    </Box>
    
      
    
  );
}

export default FooTer