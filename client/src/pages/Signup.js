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
        {"Already a member? "}
        <Link to="/login" align="center" underline="always">
          Log in here
        </Link>
      </Typography>
    </div>
  )
}

export default Signup