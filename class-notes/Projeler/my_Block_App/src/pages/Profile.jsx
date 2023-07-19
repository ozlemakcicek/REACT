import { Box, Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const Profile = () => {
  const {currentUser,bio,email}=useSelector((state)=>state.auth)
  return (
    <Grid
      container
      sx={{
        mt: 4,
        mb: 53,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
       
        }}
      >
        <Box
          sx={{
            width: 900,
            minWidth: 400,
            marginTop: "7em",
           
           
          }}
        >
          <Card sx={{bgcolor:"lightgrey"}}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                Who am I?
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {currentUser}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {bio}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {email}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Profile