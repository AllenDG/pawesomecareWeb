import React, { useState } from "react";
import NavBar from "../../Navbar/NavBar";
import img from "../../../images/images.jpg";

import {
  Avatar,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Person } from "@mui/icons-material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const paperStyle = {
    padding: 20,
    height: "60vh",
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

  const handleLogin = () => {
    // Basic validation checks
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

    // You can add further logic for handling the login process here
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
            <img alt="card img" src={img} style={{ width: "100%" }} />
          </Grid>

          {/* Right side with the login form */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <Person style={iconStyle} />
                </Avatar>
                <p style={textStyle}>Sign In</p>
              </Grid>
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

              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />

              <Button
                type="button"
                color="primary"
                variant="contained"
                style={btnStyle}
                fullWidth
                onClick={handleLogin}
              >
                Sign in
              </Button>
              <Typography>
                <Link href="/forget-password">Forgot password?</Link>
              </Typography>
              <Typography>
                Do you have an account? <Link href="/signup">Sign up</Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
