import React from "react";

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

const BlogCard = ({ blog }) => {
  const { currentUser } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const handleClickRM = (id) => {
    if (!currentUser) { 
      navigate("/login")
       toastWarnNotify("You must be logged in!");
     
    } else {
     navigate(`/app/detail/${id}`);
    }
  };
  return (
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
      <CardMedia component="img" image={blog.image} alt="adas" />

      <CardHeader title={blog.title} />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blog.content}
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

        <Button
          type="submit"
          fullWidth
          sx={{
            bgcolor: "lightgreen",
            color: "black",
            fontWeight: "600",
            marginLeft: "5rem",
            ":hover": { bgcolor: "lightgreen" },
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
