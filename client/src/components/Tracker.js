import React from "react";
import { Card, CardHeader, Grid, Typography } from "@mui/material";

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
          <Typography variant="h5">Welcome back, user.firstName</Typography>
        </Grid>
        <Card
          sx={{ minWidth: 275 }}
          style={{ backgroundColor: "#EDE9FF", border: "1px solid navy" }}
        >
          <CardHeader title="Total Completions" />
          <Typography sx={{ fontSize: 25 }}>98%</Typography>
          {/* <HabitDetails title="New page" variant="h5" /> */}
        </Card>
        <Card
          sx={{ minWidth: 275 }}
          style={{ backgroundColor: "#EDE9FF", border: "1px solid navy" }}
        >
          <CardHeader title="Current Streak" />
          <Typography sx={{ fontSize: 25 }}>98%</Typography>
        </Card>
        <Card
          sx={{ minWidth: 275 }}
          style={{ backgroundColor: "#EDE9FF", border: "1px solid navy" }}
        >
          <CardHeader title="Longest Streak" />
          <Typography sx={{ fontSize: 25 }}>98%</Typography>
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
