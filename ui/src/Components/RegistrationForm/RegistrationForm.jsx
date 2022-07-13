import * as React from "react";
import "./RegistrationForm.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient";
import axios from "axios";
import { Link } from "react-router-dom";

const RegistrationForm = (props) => {
  //form for the register page
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
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
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsProcessing(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    const { data, error } = await apiClient.signUpUser({
      email: form.email,
      username: form.username,
      first_name: form.firstName,
      lastName: form.lastName,
      password: form.password,
    });
    if (error) {
      setErrors((e) => ({ ...e, form: error }));
    }
    if (data?.user) {
      props.setUser(data.user);
      apiClient.setToken(data.token);
      navigate("/activity");
    }
    setIsProcessing(false);

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
    <div className="registration-form">
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
              {errors.form && <span className="error">{errors.form}</span>}
            </div>
            <br></br>
            <label className="email" for="email">
              Email
            </label>
            <TextField
              fullWidth
              label="Enter a Valid Email"
              id="email"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <label for="username">Username</label>
            <TextField
              fullWidth
              label="Username"
              id="username"
              value={form.username}
              onChange={handleOnInputChange}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </Stack>
          <br></br>
          <TextField
            id="FirstName-input"
            label="First Name"
            type="FirstName"
            autoComplete="firstName"
            value={form.firstName}
            onChange={handleOnInputChange}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
          <TextField
            id="LastName-input"
            label="Last Name"
            type="LastName"
            autoComplete="lastName"
            value={form.lastName}
            onChange={handleOnInputChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
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
            <TextField
              fullWidth
              label="Enter a Secure Password"
              id="password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
            <label for="ConfirmPassword">Confirm Password</label>
            <TextField
              fullWidth
              label="Confirm Password"
              id="confirmPassword"
              value={form.passwordConfirm}
              onChange={handleOnInputChange}
            />
            <Button
              variant="contained"
              disabled={isProcessing}
              onClick={handleOnSubmit}
            >
              {" "}
              {isProcessing ? "Loading..." : "Register"}
            </Button>

            <div className="footer">
              <p>
                Already have an account? Login
                <a href="/Login"> here.</a>
              </p>
            </div>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default RegistrationForm;

{
  /* <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          /> */
}
