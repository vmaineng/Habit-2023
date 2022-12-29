import React from 'react'
import { Grid, Typography } from '@mui/material';


function Tracker() {
  return (
    <div>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                {/* <HabitDetails title="New page" variant="h5" /> */}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Typography  variant="h5">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography  variant="h5">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography  variant="h5">Dashboard</Typography>
            </Grid>
            </Grid>

            

    </div>
  )
}

export default Tracker