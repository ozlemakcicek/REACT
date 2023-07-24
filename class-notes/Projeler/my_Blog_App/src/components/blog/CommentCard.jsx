import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useBlogCalls from "../../hooks/useBlogCalls";
import {  useSelector } from "react-redux";

  const CommentCard = ({ comm }) => {
    console.log(comm);
      const {getComments} = useBlogCalls();

const { comments } = useSelector((state) => state.blog);
console.log(comments);


    useEffect(() => {
      getComments(comm.id);
    }, []); // eslint-disable-line

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    return (
      <>
        <Typography
          variant="h5"
          sx={{
            marginLeft: "4rem",
            marginBottom: "2rem",
            marginTop: "1rem",
            color: "darkblue",
          }}
        >
          Comments
        </Typography>

        {comments.map((comm) => (
          <Box
            sx={{
              marginLeft: "4rem",
              borderBottom: 1,
              borderColor: "orange",
              marginBottom: 2,
            }}
          >
            <Typography variant="body2">{comm.content}</Typography>
            <Typography>{formattedDate}</Typography>
            <Typography variant="h5">{comm.user}</Typography>
          </Box>
        ))}
      </>
    );
  };

export default CommentCard;
