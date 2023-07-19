import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useBlogCalls from "../../hooks/useBlogCalls";
import {  useSelector } from "react-redux";

  const CommentCard = ({ item }) => {
    console.log(item);
      const {getComments} = useBlogCalls();


    useEffect(() => {
      getComments(item.id);
    }, []); // eslint-disable-line

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    return (
      <>
        {/* <Typography
        variant="h5"
        sx={{ marginLeft: "4rem", marginBottom: "2rem", marginTop: "1rem" }}
      >
        Comments
      </Typography> */}

        <Box
          style={{
            marginLeft: "4rem",
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            "& .MuiTextFieldRoot": { m: 1, width: "95%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ borderBottom: 1, borderColor: "orange", marginBottom: 2 }}>
            <Typography variant="body2">{item.content}</Typography>
            <Typography>{formattedDate}</Typography>
            <Typography variant="h5">{item.user}</Typography>
          </Box>
        </Box>
      </>
    );
  };

export default CommentCard;
