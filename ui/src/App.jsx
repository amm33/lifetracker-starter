import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Container from "@mui/material/Container";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        {/* <Home /> */}
        {/* <Container
        maxWidth={false}
        sx={{ backgroundColor: "orange", flexGrow: 1 }}
      >
        My Container
      </Container> */}

        {/* Navbar routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
