import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Logo from "./Logo/Logo";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
            {/* <Logo /> */}
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}

          <Button color="inherit">Activity</Button>
          <Button color="inherit">Exercise</Button>
          <Button color="inherit">Nutrition</Button>
          <Button color="inherit">Sleep</Button>
          <Button color="inherit">Login</Button>
          <Button variant="contained">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
