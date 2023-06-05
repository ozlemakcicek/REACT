import React from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './HeaderStyles';



//Header agelen getData zaten icinde verilerle geliyor.
const Header = ({setQuery,setOgun,getData}) => {
// const navigate=useNavigate()
const yapSubmit=(e)=>{
  e.preventDefault()
  getData()
}
//form a onsubmit yapinca getData yi getir dedik



  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>

{/* form larda olay button dan degil form etiketinden submit yapiliyor */}
      <FormContainer onSubmit={yapSubmit} >
        <FoodInput type="text" placeholder="Search" onChange={(e)=>setQuery(e.target.value)}/>



        <Button type="submit">Search</Button>
       

        <Select name="ogunTypes" id="ogunTypes" onChange={(e)=>setOgun(e.target.value)}>
          <option>Lunch</option>
          <option>Breakfast</option>
          <option>Tea Time</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
}

export default Header