
import React from 'react'
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";

const FooTer = () => {
    
  return (
    <Box component="footer">
      <BottomNavigation>
        <h3
          style={{
            backgroundColor: "orange",
            height: "50px",
            marginTop:"2rem",
            textAlign: "center",
            width: "100%",
          }}
        >
          Copyright © Developed By Özlem {new Date().getFullYear()}
        </h3>
      </BottomNavigation>
    </Box>
  );
}

export default FooTer