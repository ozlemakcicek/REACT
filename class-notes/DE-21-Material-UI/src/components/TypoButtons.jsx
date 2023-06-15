import React from 'react'
// div icinde Container ve icinde Typography yapilir.Box icinde de Button, i mui den import edecegiz.ilkini vermez elimizle yazacagiz

import {Box, Button, Container, Typography} from "@mui/material"
import SendIcon from "@mui/icons-material/Send";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";


const TypoButtons = () => {
  return (

    <div>
<Container>


 {/* Container div demek.Typography h,p, span ler icin kullanilir(span leri variant olarak button yazmalisin ve default olarak buyuk yazar hepsini, p icin body yazilir.body1 ve body2 ;az daha kucuk) */}
  <Typography variant='h1' color="error" align='center' sx={{backgroundColor:"#eee", mt:4, border:"1px solid blue"}}>Typography Button Container Box</Typography>

  <Typography variant='button' color="primary.light">Lorem ipsum dolor sit amet.</Typography>

  <Typography variant='body1' color="purple" align='center'>Lorem ipsum dolor sit amet.</Typography>


</Container>

{/* Button variant olarak text,contained(otomatik mavi gelir renk vereblrsn),outlined alablr.her rengi almaz eger istedigin renk diyorsan sx ile style yapablrsn.marginTop veya mt seklinde de alir */}
{/* icon icin sitesinden Material Icon a tiklayip goreblrsin .ekle ve importunu al yapistir*/}

<Box sx={{display:"flex", flexDirection:"column", mt:4,gap:2}}>

<Button variant='contained' color='error' startIcon={<SendIcon/>}>SEND</Button>
<Button variant='outlined' sx={{color:"pink"}} endIcon={<DeleteSweepIcon/>}>DELETE</Button>

</Box>


    </div>
  )
}

export default TypoButtons

// kirmizi renk error demek mui de.
// style yerine sx={} icinde birden fazla css yazablrsn aralarina komma koyup bir suslu daha acarak yapariz

// renklerde 6 renkte .dark ve .light ile acik koyu yapilablr.
// normal basit renkleri de algilar

// Container disari iceriye Box tercih edilir.Container ile sagdan soldan bosluk birakir, Box yapistirir