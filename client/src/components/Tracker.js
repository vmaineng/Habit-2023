import React from "react";
import { Card, CardContent, CardHeader, Box, Grid, Typography } from "@mui/material";

function Tracker() {
  return (
    <div>
      <Grid
        container
        rowSpacing={4.5}
        columnSpacing={2.75}
        justifyContent="space-evenly"
      >
        {/* row 1 */}
        <Grid item xs={12}>
          <Typography variant="h5">Dashboard</Typography>
        </Grid>
        <Card sx={{ minWidth: 275 }}>
          <CardHeader title="Total Completions" />
              <CardContent>
                <Typography sx={{ fontSize:14}}>98%</Typography>
                {/* <HabitDetails title="New page" variant="h5" /> */}
                </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardHeader title="Current Streak" />
          <Typography sx={{ fontSize:14}}>98%</Typography>
        
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardHeader title="Longest Streak" />
          <Typography sx={{ fontSize:14}}>98%</Typography>
              {/* <HabitDetails title="New page" variant="h5" /> */}
        </Card>
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography  variant="h5">Dashboard</Typography>
            </Grid> */}
      </Grid>
    </div>
  );
}

export default Tracker;
