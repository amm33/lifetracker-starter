import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Container from "@mui/material/Container";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar
import LandingPage from "./Components/LandingPage/LandingPage";
import Activity from "./Components/Activity/Activity";
import Exercise from "./Components/Exercise/Exercise";
import Nutrition from "./Components/Nutrition/Nutrition";
import Sleep from "./Components/Sleep/Sleep";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  //if logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          ></Navbar>

          {/* <Container
        maxWidth={false}
        sx={{ backgroundColor: "orange", flexGrow: 1 }}
      >
        My Container
      </Container> */}

          {/* Home route */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>

          {/* Activity Route */}
          <Routes>
            <Route path="/activity" element={<Activity />} />
          </Routes>

          {/* Exercise Route */}
          <Routes>
            <Route path="/exercise" element={<Exercise />}></Route>
          </Routes>

          {/* Nutrition Route  */}
          <Routes>
            <Route path="/sutrition" element={<Nutrition />}></Route>
          </Routes>

          {/* Sleep Route  */}
          <Routes>
            <Route path="/sleep" element={<Sleep />}></Route>
          </Routes>

          {/* Login Route  */}
          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>

          {/* Sign Up Route  */}
          <Routes>
            <Route path="/register" element={<SignUp />}></Route>
          </Routes>

          {/* not found */}
          <Routes>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
