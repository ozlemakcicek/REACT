import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {olusturKullanici} from "../features/yetkiSlice"


export default function Login() {
  // asagidaki yol da var ama biz Redux kullanacagiz
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

//* asagida ikisi de ayni yerden gelecegi icin ayri ayri yazilabilecegi gibi ortak seylerde {} icinde yaz bunlari ve let ile yaz.obje o.i. ve degisecegi icin const yazilmaz objelöerde.dizilerde oluyor reactta.Bunlar bir degisken oldugu icin useSelector kullanilir.Fonksiyonlarda useDispatch kullanilir


  // let email= useSelector((state)=>state.yetkiSlice.email)
  // let password= useSelector((state)=>state.yetkiSlice.password)
  
 let { email, password } = useSelector((state)=>
  state.yetkiSlice);

 const navigate=useNavigate()
 //olusturKullanici bir fonksiyon onu useDispoatch ile gonderecegiz icinde email ve password u da alacak sekilde.birden fazla gonderilecek var ise {} icinde olmali
 const dispatch=useDispatch(olusturKullanici({email,password}))
  
  const handleSubmit = (e) => {
    e.preventDefault();
    olusturKullanici()

    navigate("/")
  
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
          sx={{ width: 100, height: 100 }}
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}

            onChange={(e) => (email = e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) => (password = e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://www.clarusway.com/">
          Clarusway
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
