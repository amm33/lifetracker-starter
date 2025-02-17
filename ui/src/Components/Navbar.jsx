// import * as React from "react";
// import "./Navbar.css";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Logo from "./Logo/Logo";
// import { Link } from "react-router-dom";

// export default function Navbar(props) {
//   return (
//     <div className="navbar">
//       <Box sx={{ flexGrow: 0 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               <div className="logo">
//                 <Logo />
//               </div>
//             </IconButton>

//             {/* Links */}
//             <div className="nav-links">
//               <div className="Activity">
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     fontWeight: "400px",
//                   }}
//                   to={props.isLoggedIn ? "/activity" : "/login"}
//                   color="inherit"
//                 >
//                   ACTIVITY
//                 </Link>
//               </div>

//               <div className="Exercise">
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     fontWeight: "300px",
//                   }}
//                   to={props.isLoggedIn ? "/exercise" : "/login"}
//                   color="inherit"
//                 >
//                   EXERCISE
//                 </Link>
//               </div>

//               <div className="Nutrition">
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     fontWeight: "300px",
//                   }}
//                   to={props.isLoggedIn ? "/nutrition" : "/login"}
//                   color="inherit"
//                 >
//                   NUTRITION
//                 </Link>
//               </div>

//               <div className="Sleep">
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     fontWeight: "300px",
//                   }}
//                   to={props.isLoggedIn ? "/sleep" : "/login"}
//                   color="inherit"
//                 >
//                   SLEEP
//                 </Link>
//               </div>

//               <div className="Login">
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     fontWeight: "300px",
//                   }}
//                   to="/login"
//                   color="inherit"
//                 >
//                   LOGIN
//                 </Link>
//               </div>

//               <div className="SignUp">
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     fontWeight: "300px",
//                   }}
//                   to="/register"
//                 >
//                   SIGN UP
//                 </Link>
//               </div>
//             </div>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </div>
//   );
// }

import * as React from "react";
import "./Navbar.css";
import NavLink from "./NavLink/NavLink";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg"
              alt="logo"
            />
          </Link>
        </div>
        <NavLink
          handleLogout={props.handleLogout}
          isLogin={props.isLogin}
          user={props.user}
          setUser={props.setUser}
        />
      </div>
    </nav>
  );
}
