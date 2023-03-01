import { useState } from "react";

// material-ui
import {
  Box,
  Button,
  Container,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

// import * as Yup from "yup";
// import { Formik } from "formik";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { firstName, lastName, username, email, password };

    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setFirstName("");
      setLastName("");
      setUsername("");
      setPassword("");
      setEmail("");
      console.log("user logged in successfully");
      navigate("/home");
    }
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Card
              sx={{
                mt: 5,
                marginLeft: "10%",
                color: "navy",
                bgcolor: "#EDE9FF",
                border: "1px solid navy",
                display: "relative",
                width: "75%",
              }}
            >
              <CardHeader
                subheader="I'm excited you're here today!"
                title="Sign up"
              />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      // helperText="Please specify the habit title"
                      label="First name"
                      name="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      value={firstName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      // helperText="Please specify the description"
                      label="Last name"
                      name="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      value={lastName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      // helperText="Please specify the description"
                      label="Username"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      value={username}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      // helperText="Please specify the description"
                      label="Enter e-mail address"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      value={email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      // helperText="Please specify the description"
                      label="Enter password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      value={password}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 2,
                }}
              >
                <Button color="primary" variant="contained" type="submit">
                  Sign up
                </Button>
              </Box>
            </Card>
          </form>
        </Container>
        {error && error}
      </Box>
    </div>
  );
}

export default SignupForm;
