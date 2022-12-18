import React from "react";
import Navbar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div>
      <Navbar />

      <Typography variant="h3" gutterBottom marked="center" align="center">
        Log In
      </Typography>
      <LoginForm />
      <Typography variant="body2" align="center">
        {"Not a member yet? "}
        <Link to="/signup" align="center" underline="always">
          Sign Up here
        </Link>
      </Typography>
    </div>
  );
}

export default Login;
