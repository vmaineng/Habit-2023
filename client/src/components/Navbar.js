// import React from 'react'
import { Link } from "react-router-dom";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import Grid from "@mui/material/Grid";

//for Avatar
import Purple from "../assets/purple.png";

function Navbar() {
  const pages = [ "Signup", "Login"];
  const settings = ["Profile", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <div>
   
      <AppBar
        elevation={0}
        position="static"
        sx={{
          background: "transparent",
        }}
      >
        <Toolbar disableGutters sx={{ background: "transparent" }}>
          <Grid
            container
            spacing={0}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingTop={2}
            sx={{ paddingX: { xs: 2, md: 6 } }}
          >
            <Grid
              item
              xs={1}
              sm={3}
              md={4}
              lg={3}
              sx={{ alignItems: "inherit" }}
            >
              <Box display="flex" alignItems={"inherit"}>
                <Typography
                  variant="h6"
                  component="a"
                  href="/"
                  sx={{
                    ml: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 900,

                    textDecoration: "none",
                    fontSize: "1.8 rem",
                  }}
                >
                  Habits
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={3} md={4} lg={3}>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: { xs: "none", md: "block" } }}
                  >
                    <Link to={`/${page}`} style={{ textDecoration: "none" }}>
                      {page}
                    </Link>
                  </Button>
                ))}

                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, marginLeft: 0 }}
                  >
                    <Avatar
                      alt="Place Kitten"
                      src={Purple}
                      sx={{ border: 1, borderColor: "white" }}
                    />
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
                  PaperProps={{
                    style: {
                      background: "black",
                    },
                  }}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Button
                          key={setting}
                          component={Link}
                          to={`/${setting}`}
                          sx={{
                            my: 1,
                            color: "white",
                            fontWeight: "500",
                            display: "block",
                          }}
                        >
                          {setting}
                        </Button>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
                <IconButton
                  size="large"
                  aria-label="navigaton menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  sx={{
                    display: { xs: "block", md: "none" },
                    position: "relative",
                  }}
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
                  PaperProps={{
                    style: {
                      background: "black",
                    },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ bgcolor: "black" }}
                    >
                      <Typography textAlign="center">
                        <Button
                          key={page}
                          component={Link}
                          to={`/${page}`}
                          sx={{
                            bgcolor: "black",
                            color: "white",
                            fontWeight: "500",
                            display: "block",
                          }}
                        >
                          {page}
                        </Button>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
