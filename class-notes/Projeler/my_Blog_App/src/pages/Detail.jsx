import React, { useEffect, useState } from "react";

import {
  Avatar,
  Box,
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
import { useNavigate, useParams } from "react-router-dom";
import authSlice from "../features/authSlice";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helper/ToastNotify";
import axios from "axios";

import { Grid } from "@mui/material";
import useBlogCalls from "../hooks/useBlogCalls";
import CommentCard from "../components/blog/CommentCard";
import CommentForm from "../components/blog/CommentForm";
import DeleteModal from "../components/blog/DeleteModal";
import UpdateModal from "../components/blog/UpdateModal";



const Detail = () => {

  const { currentUser } = useSelector((state) => state.auth);
  const { detail } = useSelector((state) => state.blog);
  console.log(detail);
  const { getDetailData, postLike } = useBlogCalls();
  const { comments } = useSelector((state) => state.blog);
  const [commentField, setCommentField] = useState(false);

  //   const navigate = useNavigate();

  //guncel tarih icin
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  //detail sayfasi icin

  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    getDetailData(id);
  }, []); // eslint-disable-line

  const [isClicked, setClicked] = useState(false);

  const handleClickLike = () => {
    postLike(detail?.id);
    getDetailData(detail.id);
    setClicked(!isClicked);
  };


  // lifting state up(update ve delete den getirdik)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  
  const [formValues, setFormValues] = useState({
    title: "",
    image: "",
    category: "",
    slug: "",
    status: "",
    content: "",
  });
  const handleClose = () => {
    setOpen(false);
    setFormValues({
      title: "",
      image: "",
      category: "",
      slug: "",
      status: "",
      content: "",
    });
  };

  const [opend, setOpend] = React.useState(false);
  const handleOpend = () => setOpend(true);
  const handleClosed = () => setOpend(false);


  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 500,
          //  height: 610,
          marginTop: "4rem",
          marginLeft: "2rem",
          marginBottom: "8rem",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          image={detail?.image}
          alt="asdf"
          height="200"
          sx={{ objectFit: "contain", py: 2 }}
        />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "3rem",
            marginTop: "4rem",
          }}
        >
          <Avatar
            src="/broken-image.jpg"
            sx={{
              width: "30px",
              height: "30px",
              marginRight: "30px",
              bgcolor: "red",
            }}
          />

          <Box>
            <Typography sx={{ marginBottom: "10px" }}>
              {detail?.author}
            </Typography>
            <Typography>{formattedDate}</Typography>
          </Box>
        </CardContent>

        <CardContent>
          <Typography
            variant="h5"
            sx={{ marginLeft: "3rem", marginBottom: "10px" }}
          >
            {detail?.title}{" "}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginLeft: "3rem",
            }}
          >
            {detail.content}
          </Typography>
        </CardContent>

        <CardActions disableSpacing sx={{ marginLeft: "3rem" }}>
          <IconButton
            aria-label="add to favorites"
            color={isClicked ? "error" : "default"}
            onClick={handleClickLike}
          >
            <FavoriteBorderIcon />
            <Typography variant="h5">{detail?.likes}</Typography>
          </IconButton>

          <IconButton
            aria-label="add to favorites"
            onClick={() => setCommentField(!commentField)}
          >
            <ChatBubbleOutlineIcon />
            <Typography variant="h5">{detail?.comment_count}</Typography>
          </IconButton>

          <IconButton aria-label="add to favorites">
            <RemoveRedEyeIcon />
            <Typography variant="h5">{detail?.post_views}</Typography>
          </IconButton>
        </CardActions>

        <Box
          sx={{
            marginTop: "2rem",
            marginBottom: "4rem",
            display: "flex",
            justifyContent: "center",
            gap: "6rem",
          }}
        >
          {currentUser === detail.author ? (
            <>
              {" "}
              <Button
                // sx={{ padding: "0.6rem", width: "30%" }}
                variant="contained"
                color="success"
                // size="small"
                onClick={() => {
                  setFormValues(detail);
                  handleOpen();
                }}
              >
                Update Blog
              </Button>
              <UpdateModal
                key={detail.id}
                open={open}
                handleClose={handleClose}
                blogId={detail.id}
                formValues={formValues}
                setFormValues={setFormValues}
                handleOpen={handleOpen}
              />
            </>
          ) : (
            ""
          )}
          {currentUser === detail.author ? (
            <>
              <Button
                sx={{ padding: "0.6rem", width: "30%" }}
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleOpend()}
              >
                Delete Blog
              </Button>
              <DeleteModal
                key={detail.id}
                open={opend}
                handleClose={handleClosed}
                blogId={detail.id}
                // formValues={formValues}
                // setFormValues={setFormValues}
              />
            </>
          ) : (
            ""
          )}
        </Box>

        {commentField ? (
          <>
            {/* {detail.comments.map((item) => (
             <CommentCard item={item} />
           ))} */}
            <CommentCard comm={detail} />
            <CommentForm idNo={detail.id} />{" "}
          </>
        ) : (
          ""
        )}
      </Box>
    </Grid>
  );
};

export default Detail;
