import { Box,  Button,  TextField,  Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useBlogCalls from '../../hooks/useBlogCalls';
import { useSelector } from 'react-redux';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";



const CommentForm = ({idNo}) => {
 
const {postNewComment}=useBlogCalls() 





 const handleSubmit =(e) => {
   e.preventDefault();


  const comment = e.target[0].value;

  const newComment = {
      content: comment, 
      post: idNo,
     
    
   };
   console.log(newComment);
   try {
     postNewComment(newComment, idNo);
         
         

  e.target[0].value = ""

   } catch (error) {
    console.log(error);
   }
 
 };

  
  //  const formattedDate = new Date(`${blog?.publish_date}`).toLocaleString(
  //    "tr-TR",
  //    {
  //      day: "2-digit",
  //      month: "2-digit",
  //      year: "numeric",
  //      hour: "2-digit",
  //      minute: "2-digit",
  //      second: "2-digit",
  //    }
  //  );





  return (
    <Grid container>
      <Grid
        item
        xs={12}
      
        sx={{
          p: 2,
          m: 1,
        }}
      >
        {" "}
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // gap: 2,
              marginTop: "3rem",
              width: "100%",
              marginLeft: "2rem",
            }}
          >
            <TextField
              id="comment-input"
              label="Add a Comment"
              name="comment"
              type="text"
              variant="outlined"
              multiline // Çok satırlı alan
              rows={4} // Satır sayısı
              
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                bgcolor: "orange",
                marginTop: "2rem",
                color: "black",
                fontWeight: "600",
                ":hover": { bgcolor: "orange" },
              }}
            >
              ADD COMMENT
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
}

export default CommentForm