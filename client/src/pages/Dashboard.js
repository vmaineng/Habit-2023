import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Habitsation from "../assets/Habitsation.png";
import DashboardGoals from "../components/DashboardGoals";
import Tracker from "../components/Tracker";
import Footer from "../components/Footer";
import { Box, Card, CardContent, CardHeader, Container, Grid, Divider, Typography, useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PaidIcon from "@mui/icons-material/Paid";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { styled } from "@mui/material/styles";

function Dashboard() {
  // Registering ArcElement for Doughnut chart
  Chart.register(ArcElement);

  // State variable to hold data fetched from the backend server
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/chartData"); // Replace with your backend API endpoint
        if (response.ok) {
          const data = await response.json();
          setChartData(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  // Default data if chartData is not available
  const data = {
    datasets: [
      {
        data: [0, 0, 0],
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
      value: chartData ? chartData.selfLove : 0,
      icon: FavoriteIcon,
      color: "#3F51B5",
    },
    {
      title: "Wealth",
      value: chartData ? chartData.wealth : 0,
      icon: PaidIcon,
      color: "#E53935",
    },
    {
      title: "Health",
      value: chartData ? chartData.health : 0,
      icon: DirectionsRunIcon,
      color: "#FB8C00",
    },
  ];

  return (
    <div>
      <Navbar />
      <br />
      <Box
        sx={{
          backgroundImage: `url(${Habitsation})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 300,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 10,
        }}
      >
        <Container maxWidth={false}>
          <Tracker />
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
                    <Doughnut data={chartData || data} options={options} />
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

export default Dashboard
