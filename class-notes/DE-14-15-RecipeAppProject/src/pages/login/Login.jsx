import React, { useState } from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'
import mealSvg from "../../assets/meal.svg"
import { useNavigate } from 'react-router-dom'




const Login = () => {
//loginden girilen username ve passwort icin aciyoruz bu useState leri
  const[name,setName]=useState()
  const[pass,setPass]=useState()

const navigate=useNavigate()

//submit olayinda muhakkak e ve e.preventDefault yazilir.navigate i de yukarida hallet.
const handleSubmit=(e)=>{
  e.preventDefault();

//!fake backend kaydi yapiyoruz.localstorage de olusturp gonderioyruz.gercek bir database gonderseydik axios.post ile gonderecktik

localStorage.setItem("username",(name))
localStorage.setItem("password",(pass))

  navigate("/home")
};


  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<Clarusway/>"}Recipe</Header>

        <StyledForm onSubmit={handleSubmit}>
          {/* form olan burasi.asil onsubmiti bu yapiyor.ustteki formContainer div dir */}
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login