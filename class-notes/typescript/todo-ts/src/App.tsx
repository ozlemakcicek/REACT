import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Container from "@mui/material/Container";

function App() {
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
    />
    <Button
      variant="contained"
      endIcon={<SaveIcon />}
      sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}>
      Save Todo
    </Button>
  </Box>
</Container>
  );
}

export default App;
