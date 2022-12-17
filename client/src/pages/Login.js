import React from 'react'
import Navbar from '../components/Navbar'
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div>
      <Navbar />
      Login
      <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              to="/signup"
              align="center"
              underline="always"
            >
              Sign Up here
            </Link>
          </Typography>
    </div>
  )
}

export default Login