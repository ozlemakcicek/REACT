
import React from 'react'
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";

const FooTer = () => {
    
  return (
    <Box>
      <BottomNavigation>
        <h3
          style={{
            backgroundColor: "lightgreen",
            height: "50px",
            textAlign: "center",
            width: "100%",
          }}
        >
          Copyright © Developed By Özlem
        </h3>
      </BottomNavigation>
    </Box>
  );
}

export default FooTer