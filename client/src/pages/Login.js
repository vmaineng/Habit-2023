import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import { Field, Form, FormSpy } from 'react-final-form';

function Login() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
  };

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
         
          {/* just installed React-final-form  and need to submit new user to the back*/}

    </div>
  )
}

export default Login