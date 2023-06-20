//! mui den components uits altindan modal dan basic modal in ilkinin yapisini aldik

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export default function FirmModal({open,handleClose}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//lifting state up.(state i al ve ortak alana tasi. ustten alttakilerin hepsine aktarma yapablrsin boylece)
//* mesela burda statelerimiz openmodal da kaldi ama biz bunu hem kalemde hem new de kullanmak istiyoruz.o zaman openmodal daki stateleri hepsinin ustu olan firms e tasiyalim ki ordan ulastiralim

const [info,setInfo]=React.useState({
    name:"",
    phone:"",
    image:"",
    address:"",
})

const handleChange=(e)=>{
    console.log(e.target);
}
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="User Name"
            name="username"
            id="userName"
            type="text"
            variant="outlined"
            onChange={handleChange}
          />

          
          </Box>
        </Box>
      </Modal>
    </div>
  );
}