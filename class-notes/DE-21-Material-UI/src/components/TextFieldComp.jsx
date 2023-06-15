import { Box, Container, Typography, TextField, Button } from "@mui/material";
import React from "react";

// inputlar TextField olarak gecer ve selfclosing seklinde.acmali kapamali degiller ayni input gibi

const TextFieldComp = () => {
  let error1 = true;
  return (
    <div>
      <Container>
        <Typography variant="h4" align="center" color="error">
          TEXT-FIELD(INPUT)
        </Typography>

        <Box sx={{ mt: 4 }}>
          {/* outline inda yazi olsun dersek bu sekil default olarak.eger yaziyi(label) iceri almak istersek  variant="filled" diyerek label iceri girer.Buna type ekleyip email yapablrsn,fullwidth kaplayabildigin kadarini al ekranin gibileri de kendin ekleyeblrsn*/}
          {/* margin:dense ile az bir bosluk, normal ile daha cok margin veriyor */}
          <TextField
            margin="normal"
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            type="email"
            fullWidth
          />
          <TextField
            required
            id="filled-disabled"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          {/* defaultta label input outline çizgisinde gelir, variant=filled diyerek label ı input alanına alabiliriz */}
          {/* error icin yapiyi getirdik ve fullwidth ile margin normal ekledik.error unu degistireblrz yukariya bir degiskende false olarak yazarsak kirmiziligi gider.ayrica silip tarzini da degistireblrz.asagida orjinali*/}
          {/*    <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        /> */}
          <TextField
            type="password"
            margin="normal"
            fullWidth
            error={error1}
            id="password"
            placeholder="password giriniz"
            helperText={error1 && "yanlis girdiniz"}
          />{" "}
          <Button variant="contained" color="error">
            SUBMIT
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
