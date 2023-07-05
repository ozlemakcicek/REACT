import React,{useEffect,useState} from 'react'

import {
  Avatar,

  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate, useParams } from "react-router-dom";
import authSlice from "../features/authSlice";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helper/ToastNotify";
import axios from 'axios';

import { Grid } from "@mui/material";



const Detail = () => {
//   const { currentUser } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
 

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

// const { id } = useParams(); 
const [data, setData] = useState("");

const detailData=async()=>{
  try {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const response=await axios.get(BASE_URL,{
      headers:{
        "Authorization": `Token ${BASE_URL}`
      }
    })
    
  } catch (error) {
    
  }
}
  //  useEffect(() => {
  //   fetch(`${BASE_URL}api/${id}/`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => setData(data.data));

 
    

// }, [id]);


 return (
   <>
 
   <Card
        sx={{
          overflow: "hidden",
          width: "400px",
          height: "50rem",
          marginTop: "4rem",
          marginLeft: "2rem",
          marginBottom: "8rem",
        }}
      >
        <CardMedia component="img" image={data.image} alt="adas" />

        <CardHeader title={data.title} />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.content}
          </Typography>
        </CardContent>
        <CardHeader subheader={formattedDate} />

        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src="/broken-image.jpg"
            sx={{ width: "30px", height: "30px", marginLeft: "10px" }}
          />
          <CardHeader subheader="admin" />
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <ChatBubbleOutlineIcon />
          </IconButton>

          <IconButton aria-label="add to favorites">
            <RemoveRedEyeIcon />
          </IconButton>

          
        </CardActions>
      </Card> 
      

     </> 
 )}
         

export default Detail



