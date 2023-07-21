import React, { useState } from "react";

import {
  Avatar,
  Button,
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
import { useNavigate } from "react-router-dom";
import authSlice from "../../features/authSlice";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../../helper/ToastNotify";
import useBlogCalls from "../../hooks/useBlogCalls";



const BlogCard = ({ blog }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const { postLike } = useBlogCalls();
  
const [isClicked,setClicked]=useState(false);


  const handleClickLike = () => {
    postLike(blog?.id);
  
      (!currentUser? navigate("/login"): setClicked(!isClicked))
     
    
  };


  const handleClickRM = (idm) => {
    console.log(currentUser);
    console.log(idm);
    if (!currentUser) {
      navigate("/login");
      toastWarnNotify("You must be logged in!");
    } else {
      navigate(`/app/detail/${idm}`);
    }
  };


  return (
    <Card
      sx={{
        width: 370,
        height: 580,
        marginTop: "4rem",
        marginLeft: "2rem",
        marginBottom: "8rem",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        image={blog?.image}
        alt="adas"
        height="200"
        sx={{ objectFit: "contain", py: 2 }}
      />

      <CardHeader title={blog?.title} />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden", // tasan icerigi gizler
            textOverflow: "ellipsis", //tasan metni kirpip (...) ile gosterir
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            
          }}
        >
          {blog.content}
        </Typography>
      </CardContent>
      <CardHeader subheader={formattedDate} />

      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src="/broken-image.jpg"
          sx={{ width: "30px", height: "30px",marginRight:"15px" }}
        />
        <Typography>{blog.author}</Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          color={isClicked ? "error" : "default"}
          onClick={handleClickLike}
        >
          <FavoriteBorderIcon />
          <Typography variant="h4">{blog?.likes}</Typography>
        </IconButton>

        <IconButton aria-label="add to favorites">
          <ChatBubbleOutlineIcon />
          <Typography variant="h4">{blog?.comment_count}</Typography>
        </IconButton>

        <IconButton aria-label="add to favorites">
          <RemoveRedEyeIcon />
          <Typography variant="h4">{blog?.post_views}</Typography>
        </IconButton>

        <Button
          type="submit"
        
          sx={{
            height:"3rem",
            width:"18rem",
            bgcolor: "orange",
            color: "black",
            fontWeight: "600",
            marginLeft: "3rem",
            ":hover": { bgcolor: "orange" },
          }}
          onClick={() => handleClickRM(blog.id)}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
