import * as React from "react";
import "./Login.css";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Login = () => {
  return (
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
  );
};

export default Login;
