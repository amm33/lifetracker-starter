import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";

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
            <Logo />
          </IconButton>
          {/* Links */}
          <Link to="/Activity" color="inherit">
            ACTIVITY
          </Link>

          <Link to="/Exercise" color="inherit">
            EXERCISE
          </Link>
          <Link to="/Nutrition" color="inherit">
            NUTRITION
          </Link>
          <Link to="/Sleep" color="inherit">
            SLEEP
          </Link>
          <Link to="/Login" color="inherit">
            LOGIN
          </Link>
          <Link to="/Sign-Up" variant="contained">
            SIGN UP
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
