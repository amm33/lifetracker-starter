import * as React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";

export default function Navbar(props) {
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
          <div className="links">
            <div className="Activity">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "400px",
                }}
                to={props.isLoggedIn ? "/Activity" : "/Login"}
                color="inherit"
              >
                ACTIVITY
              </Link>
            </div>

            <div className="Exercise">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "300px",
                }}
                to={props.isLoggedIn ? "/Exercise" : "/Login"}
                color="inherit"
              >
                EXERCISE
              </Link>
            </div>

            <div className="Nutrition">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "300px",
                }}
                to={props.isLoggedIn ? "/Nutrition" : "/Login"}
                color="inherit"
              >
                NUTRITION
              </Link>
            </div>

            <div className="Sleep">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "300px",
                }}
                to={props.isLoggedIn ? "/Sleep" : "/Login"}
                color="inherit"
              >
                SLEEP
              </Link>
            </div>

            <div className="Login">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "300px",
                }}
                to="/Login"
                color="inherit"
              >
                LOGIN
              </Link>
            </div>

            <div className="SignUp">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "300px",
                }}
                to="/Register"
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
