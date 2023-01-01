import React from 'react'
import { Card,CardHeader, Box, Grid, Typography } from '@mui/material';


function Tracker() {
  return (
    <div>
      <Grid container rowSpacing={4.5} columnSpacing={2.75} justifyContent="space-evenly">
            {/* row 1 */}
            <Grid item xs={12} >
                <Typography variant="h5">Dashboard</Typography>
            </Grid>
            <Card>
                <CardHeader title="Total Completions">
            <Box sx={{ minWidth: 500}}>
                {/* <HabitDetails title="New page" variant="h5" /> */}
            </Box>
            </CardHeader>
            </Card>
            <Card>
                <CardHeader title="Current Streak">
            <Box sx={{ minWidth: 500}}>
                {/* <HabitDetails title="New page" variant="h5" /> */}
            </Box>
            </CardHeader>
            </Card>
            <Card>
                <CardHeader title="Longest Streak">
            <Box sx={{ minWidth: 500}}>
                {/* <HabitDetails title="New page" variant="h5" /> */}
            </Box>
            </CardHeader>
            </Card>
            {/* <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography  variant="h5">Dashboard</Typography>
            </Grid> */}
            </Grid>

            

    </div>
  )
}

export default Tracker