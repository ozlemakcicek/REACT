import React from 'react'

//?Dashboarda kopyaladigimiz mui den gelen Drawer in importlari
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import {useNavigate} from "react-router-dom"

//?mui den material icon larin importu
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
//?useSelector 
import {useSelector} from "react-redux";

//! bizim dahili(dashboard,sales,produkt...) ve harici(Admin..) linklerimiz var .bunlari ayri ayri arraylerde tutabiliriz.Array icinde bi obje tutacak ve title,icon ve path seklinde 3 elemani olacak


//?mui den material icon dan istedigin iconu sec ve importunu getir.kullanirken de adini cagir.tabi once install etmelisin package.json a.sitesinden alablrsin install yapisini
const internalLinks = [
  {
    icon: <GridViewRoundedIcon />,
    title: "Dashboard",
    url: "/stock/",
  },
  {
    title: "Purchase",
    icon: <ShoppingCartIcon />,
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    icon: <MonetizationOnRoundedIcon />,
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: <StoreIcon />,
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: <StarsIcon />,
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    url: "/stock/products/",
  },
];

//*external linkimizi de array seklinde yazalim
const externalLinks = [
  {
    title: "Admin Panel",
    icon: <SupervisorAccountIcon />,
    url: `${process.env.REACT_APP_BASE_URL}admin`,
  },
];

//! ve path e gitmesi lazim yonlendirecegiz.buttona onClick yapinca deyip item.path diyerek dinamik hale getirecegiz.ama aslinda bunu item.url diyerek duzeltiyoruz cunku url ler sayfaya gore farkli.ama bunlarin gozukmesi icin dashboard da yonlendirme yapacagiz.ana yapimiz dashboard ve sadece Outlet diyerek cocuklarimiz gelir hangisine tiklarsak demek...


//* Nesting CSS icin bir obje tanimliyoruz.kapsayici olan ListItemButton a sx ile style veririz.boylece yazilarin rengine etki eder ama iconlara etki etmiyor, cunku item.icon un parenti ListItemButton degil ListItemIconun icinde verilen itm.icon yani o da en yukarida import ettigimiz icon componenti. o nedenle  ListItemButton direkt etki edemiyor icona.onun  altindaki elementi(ListItemIcon) yakalayip bu tanimladigimiz objeyi onlara verebiliriz .
//*consolda en ust soldaki oka tiklayinca elements bolumunde iconlarin classi MuiSvgIcon-root yaziyor.o zaman objede bunu kullanalim ...

//!NESTED CSS:disarda bir css tanimlayip icine nested css yayinliyorz
const iconStyle = {
  color: "white",
  "& .MuiSvgIcon-root": { color: "white" },
  "&:hover": {
    color: "red",
    "& .MuiSvgIcon-root": { color: "red" },
  },
};
//!sass daki yapi.& ile elementin kendisini bildiririz.yani MuiSvgIcon classli elementin color ini white yap diyorz.& ListItemButtonu, MuiSvgIcon da ListItemIcon dan gelen elementi yakaladi

const MenuListItems = () => {

const navigate=useNavigate()

//* authSlice dan isAdmin i cagirdik
const {isAdmin}=useSelector(state=>state.auth)

  return (
    <List>
      {internalLinks.map((item, index) => (
        <ListItem key={item.title} disablePadding>
          {/* <ListItemButton sx={{color:"white", "&:hover":{color:"red"}}} */}
          <ListItemButton
            sx={iconStyle}
            onClick={() => {
              navigate(item.url);
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            {/* <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon> */}
            {/* yazi ve icon larin rengini beyaz yapalim.hover ini da yapalim.Ama ayni anda iki farkli div hover alamiyor.bu ise yaramiyor.ayni anda ayni renk alma durumuna Nesting CSS denilir.Nesting CSS icin bir obje tanimlayip(yukarida) sx icinde o tanimlananin ismini kullaniriz */}
            {/* <ListItemText sx={{ color: "white","&:hover":{color:"red"} }} primary={item.title} /> */}
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}

      {/* aynisini externalLinks icin de kopyaladik.Ama bunu kullanicimiz isAdmin ise gostersin diyoruz.authSlice da vardi bu yukarida cekelim*/}
      {/* kullanici isAdmin ise bunu gostersin dedigimiz icin && ile bu sarti verebiliriz.Bu harici bir link o.i bunu navigate ile veremeyiz.sadece to desek, veya a etiketi ile  butonda external link ler icin yeterli oluyor ve baska sayfada acsin diye de target="true" deriz.target_blanck ile ayni sey.onclicke navigate ihtiyac yok */}

      {isAdmin &&
        externalLinks.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton to={item.url} target="true" sx={iconStyle}>
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
}

export default MenuListItems

//!admin ve manager yetkisi vermek icin...browser da api keyimizin sonuna /admin diyerek bir sayfa aciyoruz.giris icin username ve passw. admin admin olmali.cikan sayfadan Users a tiklayinca sisteme giris yapan kullanicilarin listesi gozukur.kime yetki vermek istersen ona tikla ve sayfasina git.asagi dogru indiginde permissios kismindaki activ i tikla ve Groups daki manager in ustune tiklayinca sag buton aktiflesir ona da tiklayarak manager i saga ayni sekilde read onlyy yi de sola al.save yap ve artik o kisi manager.ayni sekilde admin yetkisi verip admin panelin de gozukmesi ve kendi username ve passwordu ile giris yapablmsi icin permission daki butun kutulari tiklayip supperuser olmasini saglayip save yapalim.