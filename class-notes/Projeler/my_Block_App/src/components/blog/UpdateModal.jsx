import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Form, useNavigate } from "react-router-dom";
import {
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";

const UpdateModal = ({ open,handleOpen, handleClose,blogId,formValues,setFormValues }) => {



  
const{getBlogData,putBlogData}=useBlogCalls()
  const { categories } = useSelector((state) => state.blog);


 React.useEffect(() => {
   getBlogData("categories");
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);


  const handleChange = (e) => {
    // console.log(e.target)
    // console.log(e.target.name);
    // console.log(e.target.value);
    setFormValues({ ...formValues, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    putBlogData(formValues,blogId)
 
    handleClose();
  };

  console.log(formValues);
//  const navigate = useNavigate();


  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
      
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      
    >
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          // direction="row-reverse"
          alignItems="center"
          sx={{
            p: 2,
          }}
        >
          <Grid item xs={10} sm={8} md={6} lg={4}>
            <Card
              sx={{
                width: 350,
                height: 530,
                borderRadius: "10px",
                marginBottom: "1rem",
                padding: "2rem",
                boxShadow: "4px 8px 50px rgba(0, 0, 0, 50)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  gap: 2,
                  marginTop: "2rem",
                  color: "orange",
                }}
                component={"form"}
                onSubmit={handleSubmit}
                
              >
                <Typography
                  sx={{ fontFamily: "fantasy", paddingLeft: "1rem" }}
                  variant="h5"
                >
                  Update Blog
                </Typography>

                <TextField
                  id="title"
                  label="Title"
                  name="title" // name e gore yaziyorz bunlari
                  type="text"
                  color="warning"
                  variant="outlined"
                  value={formValues.title}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // helperText={touched.title && errors.title}
                  // error={touched.title && Boolean(errors.title)}
                  required
                />

                <TextField
                  id="image"
                  label="Image URL"
                  name="image"
                  type="img"
                  color="warning"
                  value={formValues.image}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // helperText={touched.image && errors.image}
                  // error={touched.image && Boolean(errors.image)}
                  required
                />

                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      required
                      color="warning"
                    >
                      Category
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="category"
                      label="Category"
                      value={formValues.category}
                      // onBlur={handleBlur}
                      color="warning"
                      // onChange={(e) => {
                      //   setFormValues("category", e.target.value);
                      // }}
                      onChange={handleChange}
                    >
                      {categories?.map((category) => (
                        <MenuItem value={category.id}>{category.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      required
                      color="warning"
                    >
                      Status
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="status"
                      label="Status"
                      color="warning"
                      // onChange={(e) => {
                      //   setFormValues("status", e.target.value);
                      // }}
                      onChange={handleChange}
                      value={formValues.status}
                      // onBlur={handleBlur}
                      required
                    >
                      <MenuItem>Please choose...</MenuItem>

                      <MenuItem value="d">Draft</MenuItem>

                      <MenuItem value="p">Published</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  id="content"
                  label="Content"
                  name="content"
                  type="content"
                  variant="outlined"
                  value={formValues.content}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // helperText={touched.content && errors.content}
                  // error={touched.content && Boolean(errors.content)}
                  required
                  color="warning"
                  multiline
                  rows={2}
                />

                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    bgcolor: "orange",
                    color: "black",
                    fontWeight: "600",
                    ":hover": { bgcolor: "orange" },
                  }} 
                  
                >
                UPDATE BLOG
                 
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
};

export default UpdateModal;
