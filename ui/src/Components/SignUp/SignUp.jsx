import * as React from "react";
import "./SignUp.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SignUp = (props) => {
  //form for the register page
  const [form, setForm] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const handleOnInputChange = (event) => {
    //email
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    //username
    if (event.target.name === "username") {
      if (event.target.value.length === 0) {
        setErrors((e) => ({ ...e, username: "Please enter your username." }));
      } else {
        setErrors((e) => ({ ...e, username: null }));
      }
    }

    //first name
    if (event.target.name === "firstName") {
      if (event.target.value.length === 0) {
        setErrors((e) => ({ ...e, firstName: "Please enter your first name" }));
      } else {
        setErrors((e) => ({ ...e, firstName: null }));
      }
    }

    //last name
    if (event.target.name === "lastName") {
      if (event.target.value.length === 0) {
        setErrors((e) => ({ ...e, lastName: "Please enter your last name" }));
      } else {
        setErrors((e) => ({ ...e, lastName: null }));
      }
    }

    //password
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    //confirming password
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  //on submit
  const handleOnSubmit = async () => {
    // setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsLoading(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    // try {
    //   console.log(form.date);
    //   const res = await axios.post("http://localhost:3001/auth/register", {
    //     date: form.date,
    //     location: form.location,
    //     first_name: form.firstName,
    //     last_name: form.lastName,
    //     email: form.email,
    //     password: form.password,
    //   });

    //     if (res?.data?.user) {
    //       setAppState(res.data);
    //       setIsLoading(false);
    //       navigate("/portal");
    //     } else {
    //       setErrors((e) => ({
    //         ...e,
    //         form: "Something went wrong with registration",
    //       }));
    //       setIsLoading(false);
    //     }
    // } catch (err) {
    //   console.log(err);
    //   const message = err?.response?.data?.error?.message;
    //   setErrors((e) => ({
    //     ...e,
    //     form: message ? String(message) : String(err),
    //   }));
    //   setIsLoading(false);
    // }
  };

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
