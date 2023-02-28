import React from "react";
import Navbar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

function Login() {
  return (
    <div>
      <Navbar />

      <LoginForm />
      <Typography variant="body2" align="center">
        {"Not a member yet? "}
        <Link to="/signup" align="center" underline="always">
          Sign Up here
        </Link>
      </Typography>
   <br />
   <br />
      <Footer />
      
    </div>
  );
}

export default Login;
