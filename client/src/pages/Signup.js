import React from 'react'
import Navbar from '../components/Navbar'
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import SignupForm from '../components/SignupForm';

function Signup() {
  return (
    <div><Navbar /> 
     <Typography variant="h3" gutterBottom marked="center" align="center">
        Sign up
      </Typography>
     <SignupForm />
      <Typography variant="body2" align="center">
        {"Not a member yet? "}
        <Link to="/login" align="center" underline="always">
          Have a log in?
        </Link>
      </Typography>
    </div>
  )
}

export default Signup