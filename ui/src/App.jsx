import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Container from "@mui/material/Container";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar
import Home from "./Components/Home/Home";
import Activity from "./Components/Activity/Activity";
import Exercise from "./Components/Exercise/Exercise";
import Nutrition from "./Components/Nutrition/Nutrition";
import Sleep from "./Components/Sleep/Sleep";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  //if logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

        {/* <Container
        maxWidth={false}
        sx={{ backgroundColor: "orange", flexGrow: 1 }}
      >
        My Container
      </Container> */}

        {/* Home route */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Activity Route */}
        <Routes>
          <Route path="/Activity" element={<Activity />} />
        </Routes>

        {/* Exercise Route */}
        <Routes>
          <Route path="/Exercise" element={<Exercise />}></Route>
        </Routes>

        {/* Nutrition Route  */}
        <Routes>
          <Route path="/Nutrition" element={<Nutrition />}></Route>
        </Routes>

        {/* Sleep Route  */}
        <Routes>
          <Route path="/Sleep" element={<Sleep />}></Route>
        </Routes>

        {/* Login Route  */}
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>

        {/* Sign Up Route  */}
        <Routes>
          <Route path="/Register" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
