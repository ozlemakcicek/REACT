import React from 'react'
import MyFoto from "../assets/ÖZLEM AKCICEK (3).png";
import { Box, Grid, IconButton } from '@mui/material';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { WidthFull } from '@mui/icons-material';




const handleLinkedInClick = () => {
  window.open("https://www.linkedin.com/in/ozlem-akcicek-a08b1025a/", "_blank");
};

const handleGitHubClick = () => {
  window.open("https://github.com/ozlemakcicek", "_blank");
};



const About = () => {
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
        sx={{ marginTop: "6rem",marginBottom:"4rem", display: "flex", flexDirection: "column" }}
      >
        <img
          src={MyFoto}
          alt=""
          style={{ borderRadius: " 50%" }}
        />
        <Box sx={{display:"flex", justifyContent:"center",alignItems:"center",marginTop:"4rem"}}>
        <IconButton
          aria-label="linkedIn"
          onClick={handleLinkedInClick}
          sx={{ marginRight: "2rem" }}
        >
          <LinkedInIcon color="black" fontSize="large" />
        </IconButton>
        <IconButton aria-label="GitHub" onClick={handleGitHubClick}>
          <GitHubIcon color="dark" fontSize="large" />
        </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About