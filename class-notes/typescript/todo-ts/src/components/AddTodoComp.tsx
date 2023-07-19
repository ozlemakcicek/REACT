import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Container from "@mui/material/Container";

const AddTodoComp = () => {
  const [text, setText] = useState(""); //! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.

  const handleClick = () => {
    console.log(text)
  }
  return (
    <Container>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          m: { xs: 4, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}>
        <TextField
          id="outlined-basic"
          label="New Todo"
          variant="outlined"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          inputProps={{ maxLength: 40 }}
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SaveIcon />}
          onClick={handleClick}
          disabled={!text.trim()}
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}>
          Save Todo
        </Button>
      </Box>
    </Container>
  );
}

export default AddTodoComp