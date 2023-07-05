import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import "../assets/clarusway_LOGO_tek_png.png";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import MyImage from "../assets/clarusway_LOGO_tek_png.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useAuthCalls from "../hooks/useAuthCalls";
// import MyFoto from "../assets/1671227414889.jpg";

// const pages = ["DASHBOARD","NEW BLOG", "ABOUT"];

// const settings = ["Login"];

const pages = [
  {
    
    title: "Dashboard",
    url: "/",
  },
  {
  
    title:"About",
    url: "/about",
  },
  {
   title:"NewBlog",
    url: "/app/newblog",
  },
]







function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(false);

const {currentUser}=useSelector(state=>state.auth);

const {login,logout}= useAuthCalls()

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  return (
    <AppBar position="static" sx={{ bgcolor: "lightgreen" }}>
      
        <Toolbar disableGutters>
          <img
            src={MyImage}
            alt={MyImage}
            style={{
              width: 80,
              height: 80,
              paddingLeft: "10px",
              paddingRight: "20px",
            }}
          />

          {/* KUCUK EKRANDAKI ICIN */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.url} onClick={()=>navigate(page.url)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* kucuk ekranda */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.url}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: 600,
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                <Avatar alt="" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!currentUser ? (
                <>
                  <MenuItem
                    onClick={() => ( navigate("/login"))}
                  >
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </>
              ) : (
                <>
               
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">My Blogs</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={(handleCloseUserMenu, logout)}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
  
    </AppBar>
  );
}

export default Navbar;
