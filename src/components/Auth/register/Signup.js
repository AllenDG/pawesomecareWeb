import React, { useState } from "react";
import NavBar from "../../Navbar/NavBar";
import signupImage from "../../../images/signup.jpg"; // Import your image here

import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Person } from "@mui/icons-material";


const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const paperStyle = {
    padding: 20,
    height: "65vh",
    width: 400,
    marginTop: "200px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const avatarStyle = {
    backgroundColor: "#1E3A8A",
    width: 90,
    height: 90,
  };
  const iconStyle = {
    width: 50,
    height: 50,
  };
  const textFieldStyle = {
    marginBottom: "10px",
    marginTop: "20px",
  };
  const btnStyle = {
    margin: "10px 0",
  };
  const textStyle = {
    fontWeight: "bold",
    fontSize: "20px",
    marginTop: "15px",
  };

  const handleSignup = () => {
    // Basic validation
    if (fullName === "") {
      setFullNameError(true);
    } else {
      setFullNameError(false);
    }

    if (username === "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    if (password === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (confirmPassword === "") {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }

    if (password !== confirmPassword) {
      setPasswordError(true);
      setConfirmPasswordError(true);
    }

    // Add further logic for handling signup
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div
        className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
        data-aos="zoom-in"
      >
        <Grid container>
          {/* Left side with the image */}
          <Grid item xs={12} sm={6}>
            <img
              alt="signup img"
              src={signupImage}
              style={{ width: "100%", height: "70%", marginTop:"150px" }}
            />
          </Grid>

          {/* Right side with the signup form */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <Person style={iconStyle} />
                </Avatar>
                <p style={textStyle}>Sign Up</p>
              </Grid>
              <TextField
                style={textFieldStyle}
                label="Full Name"
                placeholder="Enter full name"
                fullWidth
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                error={fullNameError}
                helperText={fullNameError ? "Full Name is required" : ""}
              />
              <TextField
                style={textFieldStyle}
                label="Username"
                placeholder="Enter username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={usernameError}
                helperText={usernameError ? "Username is required" : ""}
              />
              <TextField
                style={textFieldStyle}
                label="Password"
                placeholder="Enter password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                helperText={passwordError ? "Password is required" : ""}
              />
              <TextField
                style={textFieldStyle}
                label="Confirm Password"
                placeholder="Confirm password"
                type="password"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={confirmPasswordError}
                helperText={
                  confirmPasswordError
                    ? "Passwords do not match or are required"
                    : ""
                }
              />

              <Button
                type="button"
                color="primary"
                variant="contained"
                style={btnStyle}
                fullWidth
                onClick={handleSignup}
              >
                Sign up
              </Button>

              <Typography>
                Already have an account? <Link href="/Login">Login</Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Signup;
