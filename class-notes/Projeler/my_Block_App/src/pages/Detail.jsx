import React,{useEffect,useState} from 'react'

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
import axios from 'axios';

import { Grid } from "@mui/material";
import useBlogCalls from '../hooks/useBlogCalls';
import CommentCard from '../components/blog/CommentCard';
import CommentForm from '../components/blog/CommentForm';
import DeleteModal from '../components/blog/DeleteModal';
import UpdateModal from '../components/blog/UpdateModal';



const Detail = () => {

  const {currentUser}=useSelector((state)=>state.auth)
  const { detail } = useSelector((state) => state.blog);
  const { postLike } = useBlogCalls();
  const {comments} = useSelector((state)=>state.blog)
  const [commentField,setCommentField]=useState(false)


  const [blogDetail, setBlogDetail] = useState(null);
//   const navigate = useNavigate();
 
//guncel tarih icin
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();


//blogDetail sayfasi icin
const { getDetailData } = useBlogCalls();
const { id } = useParams(); 
console.log(useParams());

useEffect(() => {
  const fetchData = async () => {
    const response = await getDetailData(id);
    setBlogDetail(response);
    console.log(blogDetail);
  };
  fetchData();
  // eslint-disable-line
}, []);

const [isClicked, setClicked] = useState(false);

const handleClickLike = () => {
  postLike(blogDetail?.id);
 getDetailData(blogDetail.id);
  setClicked(!isClicked);
};






const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => {
  setOpen(false);
  setFormValues({
    title: "",
    image: "",
    category_name: "",
    address: "",
    status: "",
    content: "",
  });
};

const [open1, setOpen1] = React.useState(false);
const handleOpen1 = () => setOpen1(true);
const handleClose1 = () => setOpen1(false);

const [formValues, setFormValues] = useState({
  title: "",
  image: "",
  category_name: "",
  address: "",
  status: "",
  content: "",
});



 return (
   <Grid
     container
     style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
         image={blogDetail?.image}
         alt="adas"
         height="200"
         sx={{ objectFit: "contain", py: 2 }}
       />
       <CardContent
         sx={{ display: "flex", alignItems: "center", marginLeft: "3rem" }}
       >
         <Avatar
           src="/broken-image.jpg"
           sx={{
             width: "30px",
             height: "30px",
             marginRight: "10px",
             bgcolor: "red",
           }}
         />

         <Typography>{blogDetail?.author}</Typography>
       </CardContent>

       <CardHeader subheader={formattedDate} sx={{ marginLeft: "3rem" }} />

       <CardHeader title={blogDetail?.title} sx={{ marginLeft: "3rem" }} />

       <CardContent>
         <Typography
           variant="body2"
           color="text.secondary"
           sx={{
             marginLeft: "3rem",
           }}
         >
           {blogDetail.content}
         </Typography>
       </CardContent>

       <CardActions disableSpacing sx={{ marginLeft: "3rem" }}>
         <IconButton
           aria-label="add to favorites"
           color={isClicked ? "error" : "default"}
           onClick={handleClickLike}
         >
           <FavoriteBorderIcon />
           <Typography variant="h5">{blogDetail?.likes}</Typography>
         </IconButton>

         <IconButton
           aria-label="add to favorites"
           onClick={() => setCommentField(!commentField)}
         >
           <ChatBubbleOutlineIcon />
           <Typography variant="h5">{blogDetail?.comment_count}</Typography>
         </IconButton>

         <IconButton aria-label="add to favorites">
           <RemoveRedEyeIcon />
           <Typography variant="h5">{blogDetail?.post_views}</Typography>
         </IconButton>
       </CardActions>

       <Box
         sx={{
           marginTop: "2rem",
         }}
       >
         {currentUser === blogDetail.author ? (
           <>
             {" "}
             <Button
               sx={{ padding: "0.6rem", marginRight: "16.7rem" }}
               variant="contained"
               color="success"
               size="small"
               onClick={() => {
                 setFormValues(blogDetail);
                 handleOpen();
               }}
             >
               Update Blog
             </Button>
             <DeleteModal
               key={blogDetail.id}
               open={open}
               handleClose={handleClose}
               blogId={blogDetail.id}
               formValues={formValues}
               setFormValues={setFormValues}
             />
           </>
         ) : (
           ""
         )}{" "}
         {currentUser === blogDetail.author ? (
           <>
             <Button
               sx={{ padding: "0.6rem" }}
               variant="contained"
               color="error"
               size="small"
               onClick={() => handleOpen1()}
             >
               Delete Blog
             </Button>
             <UpdateModal
               key={blogDetail.id}
               open={open1}
               handleClose={handleClose1}
               blogId={blogDetail.id}
             />
           </>
         ) : (
           ""
         )}
       </Box>

       {commentField ? (
         <>
           {blogDetail.comments.map((item) => (
             <CommentCard item={item} />
           ))}
           <CommentForm setBlogDetail={setBlogDetail} blogDetail={blogDetail} />{" "}
         </>
       ) : (
         ""
       )}
     </Box>
   </Grid>
 );}
     

export default Detail



