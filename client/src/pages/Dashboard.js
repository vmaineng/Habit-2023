import React from "react";
import Navbar from "../components/Navbar";
import TopNav from "../components/TopNav";
import DashboardGoals from "../components/DashboardGoals";
import Tracker from "../components/Tracker";
import Footer from "../components/Footer";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Divider,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PaidIcon from "@mui/icons-material/Paid";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { styled } from "@mui/material/styles";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";

function Dashboard() {
  //need to register all elements using Chart.js - doughnut
  Chart.register(ArcElement);

  const DashboardLayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 100,
    },
  }));

  const theme = useTheme();

  // creating dashboard results
  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ["#3F51B5", "#e53935", "#FB8C00"],
        borderWidth: 8,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: ["Health", "Wealth", "Self-love"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const genres = [
    {
      title: "Self-love",
      value: 63,
      icon: FavoriteIcon,
      color: "#3F51B5",
    },
    {
      title: "Wealth",
      value: 15,
      icon: PaidIcon,
      color: "#E53935",
    },
    {
      title: "Health",
      value: 23,
      icon: DirectionsRunIcon,
      color: "#FB8C00",
    },
  ];

  return (
    <div>
      <Navbar />
      <TopNav />
      <br />
      <Card
        sx={{
          py: 3,
          boxShadow: 5,
          textAlign: "center",
          color: "navy",
          bgcolor: "#EDE9FF",
          border: "1px solid navy",
        }}
      >
        <Grid item xs={9}>
          <AddToQueueIcon width={100} height={100} />
        </Grid>

        <Typography variant="h3">My Weekly Goals</Typography>
      </Card>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 10,
        }}
      >
        <Container maxWidth={false}>
          {/* Tracker */}
          <Tracker />

          {/* layout for doughnut and habits */}
          <DashboardLayoutRoot>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Card
                style={{ backgroundColor: "#EDE9FF", border: "1px solid navy" }}
              >
                <CardHeader title="Categories" />
                <Divider />
                <CardContent>
                  <Box
                    sx={{
                      height: 300,
                      position: "relative",
                    }}
                  >
                    <Doughnut data={data} options={options} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      pt: 2,
                    }}
                  >
                    {genres.map(({ color, icon: Icon, title, value }) => (
                      <Box
                        key={title}
                        sx={{
                          p: 2,
                          textAlign: "center",
                        }}
                      >
                        <Icon color="action" />
                        <Typography color="textPrimary" variant="body1">
                          {title}
                        </Typography>
                        <Typography style={{ color }} variant="h4">
                          {value}%
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Box sx={{ p: 15, mt: -13 }}>
              <DashboardGoals />
            </Box>
          </DashboardLayoutRoot>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}

export default Dashboard;
