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

import MyLogo from "../assets/ÖZLEM (3).gif";
import logo2 from "../assets/1.png";

import MyImage from "../assets/ÖZLEM AKCICEK (3).png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useAuthCalls from "../hooks/useAuthCalls";
import MyFoto from "../assets/OIF.jpg";
import { toastWarnNotify } from "../helper/ToastNotify";



const pages = [
  {
    title: "Dashboard",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "NewBlog",
    url: "/app/newblog",
  },
];

const settings = [
  {
    title: "My Blogs",
    url: "/myblog",
  },
  {
    title: "Profile",
    url: "/profile",
  },
  {
    title: "Logout",
    url: "/",
  },
];

const current = [
  {
    title: "Register",
    url: "/register",
  },
  {
    title: "Login",
    url: "/login",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(false);

  const { currentUser } = useSelector((state) => state.auth);
 const {image}=useSelector((state)=>state.auth)
  const { logout } = useAuthCalls();

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

  const handleClickSettings = (a) => {
    if (a.title === "Logout") {
      logout();
    } else {
      navigate(a.url);
    }
  };

  const handleClickPages = (page) => {
    if (!currentUser && page.title === "New Blog") {
      navigate(page.url);
      toastWarnNotify("You must be logged in!");
    } else {
      handleCloseNavMenu();
      navigate(page.url);
    }
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            href="/"
            sx={{
              display: {
                xs: "none",
                //md: "flex",
                lg: "flex",
                cursor: "pointer",
                color: "black",
              },
            }}
          >
            <img
              src={MyLogo}
              alt="MyLogo"
              style={{
                width: "120px",

                paddingRight: "20px",

                // borderRadius:"50%",
              }}
              onClick={() => navigate("/")}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            BLOG APP
          </Typography>

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
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => handleClickPages(page)}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* kucuk ekranda */}
          <Box
            // component="a"
            href="/"
            sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }}
          >
            <img
              src={logo2}
              alt="myLogo"
              style={{
                width: "120px",

                // borderRadius:"50%",
                paddingRight: "90px",
              }}
              onClick={() => navigate("/")}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleClickPages(page)}
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
                <Avatar alt="" src={currentUser ? MyFoto : image} />
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
              {currentUser
                ? settings.map((setting) => (
                    <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => handleClickSettings(setting)}
                      >
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))
                : current.map((current) => (
                    <MenuItem key={current.title} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => navigate(current.url)}
                      >
                        {current.title}
                      </Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
