import React from 'react'
import Navbar from "../components/Navbar"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Purple from "../assets/purple.png"
import Typography from '@mui/material/Typography';

function Landingpage() {


  return (
    <div>
        <Navbar />
        <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
       
{/* <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1,
          }}
        /> */}

<Typography color="inherit" align="center" variant="h2" marked="center">
        Habit Breaker
      </Typography>
         <img
          src={Purple}
          alt="wonder"
          width="1400"
          height="500"
        />


        </Container>

    </div>
  )
}

export default Landingpage
