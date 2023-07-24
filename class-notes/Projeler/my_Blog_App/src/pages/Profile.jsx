import { Box, Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import logo from "../assets/question-g78a2f28cd_1280.jpg";

const Profile = () => {
  const {currentUser,bio,email,firstName,image}=useSelector((state)=>state.auth)
  return (
    <Grid
      container
      sx={{
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
        }}
      >
        <Box
          sx={{
            width: 650,
            minWidth: 400,
            marginTop: "2em",
          }}
        >
          <Card sx={{ bgcolor: "lightgrey" }}>
            <CardMedia
              // sx={{ objectFit: "contain", height: "300px" }}
              component="img"
              image={image ? image : logo}
              alt="image"
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                Who am I?
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {currentUser}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {email}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {firstName}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {bio}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Profile