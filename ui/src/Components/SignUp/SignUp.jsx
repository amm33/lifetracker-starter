import * as React from "react";
import "./SignUp.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SignUp = () => {
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
            <h2>Register</h2>
          </div>
          <br></br>
          <label className="email" for="email">
            Email
          </label>
          <TextField fullWidth label="Enter a Valid Email" id="email" />
          <label for="username">Username</label>
          <TextField fullWidth label="Username" id="username" />
        </Stack>
        <br></br>
        <TextField
          id="FirstName-input"
          label="First Name"
          type="FirstName"
          autoComplete="firstName"
        />
        <TextField
          id="LastName-input"
          label="Last Name"
          type="LastName"
          autoComplete="lastName"
        />
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
          <label for="Password">Password</label>
          <TextField fullWidth label="Enter a Secure Password" id="password" />
          <label for="ConfirmPassword">Confirm Password</label>
          <TextField fullWidth label="Confirm Password" id="confirmPassword" />
          <Button variant="contained">Register</Button>

          <div className="footer">
            <p>
              Already have an account? Login
              <a href="/Login"> here.</a>
            </p>
          </div>
        </Stack>
      </Box>
    </div>
  );
};

export default SignUp;

{
  /* <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          /> */
}
