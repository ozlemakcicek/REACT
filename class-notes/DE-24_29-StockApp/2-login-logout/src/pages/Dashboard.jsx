// //! Logout sayfasi Daschboard sayfasi olacak

// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";

// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// import { useSelector } from "react-redux";
// import useAuthCall from "../hooks/useAuthCall";

// //logout fonksiyonumuz hazir.butonun onClickine onu vermemiz lazim ki calissin.once import unu useAuthCall dan  yapalim.useAuthCall dan logout u cagirarak asagida destruction ile yaptik.

// function Dashboard() {
//   const { currentUser } = useSelector(state => state.auth);
//   const {logout} =useAuthCall()

// //!navbar kismi mui den Appbar dan alindi
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             STOCK APP
//           </Typography>
//           {/* currentUser varsa logout butonunu goster diyoruz */}
//           {currentUser && <Button color="inherit" onClick={()=>logout()}>Logout</Button>}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Dashboard;




//! dashboard daki yapiyi aside ve navbar yapisini mui den components--Navigation--Drawer dan aldik duzenleme yapiyoruz kendimize gore.aside alaninda oynamalar yapacagimiz icin o kismi ayri bir componente tasiyoruz ve adini burda cagiriyoruz.importlarini da goturuyoruz


import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuListItems from "../components/MenuListItems";
import { Outlet } from "react-router-dom";
import { Button, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //renk icin useTheme hooku
  const theme=useTheme()

  //*Logout islemleri icin yukariyi kapatmistik Drawer yapisini kurarken.tekrar ordan alip gelip importlari yapalim css ini ayarlayalim ve logout isleminin yapilamsisni da saglayalim
  const { currentUser } = useSelector((state) => state.auth);
   const { logout } = useAuthCall();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      
      <MenuListItems/>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* stockApp velogout un arasinin acilmasi icin flexGrow:1 verdik.tek bir elemente flexGrow verirsek  1 veya 5 vermen onemli degil.sen 1 al geri kalan ne kadar yer varsa o alsin demek.ilk verdigin kimse ona gore ayanir digerinin yeri */}
          <Typography variant="h6" noWrap component="div" sx={{flexGrow:1}}>
            StockApp
          </Typography>
          {currentUser && (
            <Button color="inherit" onClick={() => logout()}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          //!drawer a bir backgr.colr verelim .app.js de bir theme tanimlamistik onu import edelim fonksiyonun icinde.ve hem byk ekrandaki hem de mobiuldeki goruntuye backgroundcolor unu App.js deki yola gore yazalim
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: theme.palette.secondary.main,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: theme.palette.secondary.main,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* ana routh imiz dashboard ordan tiklayinca hangisinin gelmesini istiyorsak onun icin sadece Outlet yazmamiz yeterli. */}
        <Outlet />
      </Box>
    </Box>
  );
}



export default Dashboard;