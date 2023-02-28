import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


function Signup() {
  return (
    <div>
      <Navbar />
      <Box sx={{ p: { xs: 5, sm: 5, md: 5, xl: 10 } }}>
        <Grid item xs={12}>
          <SignupForm />
          <Typography
        component={Link}
        to="/login"
        variant="body1"
        sx={{ textDecoration: "none" }}
        color="primary"
      >
        {"Already a member? "}
      </Typography>
        </Grid>
      </Box>


      {/* <Link to="/login" >
          Log in here
        </Link> */}


      <Footer /> 

      {/* <Typography
        component={Link}
        to="/login"
        variant="body1"
        sx={{ textDecoration: "none" }}
        color="primary"
      >
        {"Already a member? "}
      </Typography> */}
    </div>
  );
}

export default Signup;
