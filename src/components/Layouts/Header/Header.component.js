import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
import Logo from "./../../../assets/images/et_logo.png";
// https://www.youtube.com/watch?v=3HAARPCabUo
// https://www.youtube.com/watch?v=o1chMISeTC0&t=3981s
//https://mui.com/system/display/
// https://mui.com/material-ui/react-button/#icon-button
// https://mui.com/material-ui/react-app-bar/#main-content
// https://mui.com/material-ui/api/menu/#main-content
import { NavLink } from "react-router-dom";
import Profile from "../../Common/Profile/Profile";

export default function HeaderBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const pages = ["Feeds", "Blogs", "About", "News"];

  const [alignment, setAlignment] = React.useState("Feeds");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleMenu = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          height: "72px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
          paddingX: {
            lg: "4%",
            md: "3%",
            sm: "2%",
            xs: "1%",
          },
        }}
        position="fixed"
      >
        <Toolbar>
          {/* IconButton is basically a button tag if you don't you it, that's like just using svg(MenuIcon) see the elements on console */}

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="primary"
            variant="h6"
            component="div"
            sx={{ flexGrow: { xs: 1, md: 0 } }}
          >
            <img src={Logo} style={{ width: "100px" }} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              sx={{ borderRadius: 0 }}
            >
              {pages.map((page) => (
                <ToggleButton
                  value={page.toLowerCase()}
                  component={NavLink}
                  to={page.toLowerCase()}
                  key={page}
                  sx={{
                    border: "none",
                    marginX: 1,
                    padding: "6px 16px",
                    marginY: 0,
                    borderRadius: 0,
                    color: "black",
                  }}
                >
                  {page}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{ color: "primary" }}
              >
                <Profile />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          ) : (
            <Box>
              {/* https://mui.com/material-ui/react-button/ */}
              <Button sx={{ fontWeight: 400 }}>Login</Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 400,
                }}
              >
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
