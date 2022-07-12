import * as React from "react";
import "./Login.css";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Login = (props) => {
  //form of the login page
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //handling login inputs
  const handleOnInputChange = (event) => {
    //email portion
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    //password portion
    if (event.target.name == "password") {
      if (event.target.value.length < 8) {
        setErrors((e) => ({
          ...e,
          password: "Please enter valid password with greater length than 8",
        }));
      } else {
        setErrors((e) => ({ ...e, password: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  //handling on submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));
  };

  //body of the page
  return (
    <div className="login-page">
      <div className="container">
        <Box>
          <Stack
            component="form"
            sx={{
              // width: "25ch",
              width: 500,
              maxWidth: "100%",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <div className="header">
              <h2>Login</h2>
            </div>
            <br></br>
            <label className="email" for="email">
              Email
            </label>
            <TextField fullWidth label="user@gmail.com" id="email" />
            <label for="password">Password</label>
            <TextField fullWidth label="password" id="password" />
            <Button variant="contained">Login</Button>

            <div className="footer">
              <p>
                Don't have an account? Sign up
                <a href="/Register"> here.</a>
              </p>
            </div>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default Login;
