import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HabitDetails from "../components/HabitDetails";
import HabitForm from "../components/HabitForm";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PhoneIcon from "@mui/icons-material/Phone";
import TabletIcon from "@mui/icons-material/Tablet";
 import { Doughnut } from "react-chartjs-2";
 import {Chart, ArcElement} from 'chart.js'

function Dashboard() {
  //need to register all elements using Chart.js - doughnut
  Chart.register(ArcElement);
  const theme = useTheme();

  const [habits, setHabits] = useState(null);

  useEffect(() => {
    const fetchHabits = async () => {
      const response = await fetch("/api/habits");
      const json = await response.json();
      if (response.ok) {
        setHabits(json);
      }
    };

    fetchHabits();
  }, []);

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
    labels: ["Health", "Wealth", "Wellness"],
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
      title: "Health",
      value: 63,
      icon: LaptopMacIcon,
      color: "#3F51B5",
    },
    {
      title: "Wealth",
      value: 15,
      icon: TabletIcon,
      color: "#E53935",
    },
    {
      title: "Wellness",
      value: 23,
      icon: PhoneIcon,
      color: "#FB8C00",
    },
  ];

  return (
    <div>
      <Navbar />
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
      <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
      <Card sx={{ height: '100%' }} > 
      <CardHeader title="Dashboard" />
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
                p: 1,
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
      Dashboard
      <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
      {habits &&
        habits.map((habit) => <HabitDetails key={habit._id} habit={habit} />)}
      <HabitForm />
      </Grid>
      </Container>
      </Box>
    </div>
  );
}

export default Dashboard;
