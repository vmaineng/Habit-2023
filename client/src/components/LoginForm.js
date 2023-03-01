import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Button,
  Grid,
  Divider,
  TextField,
  useTheme,
} from "@mui/material";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const user = { email, password };

    const response = await fetch("/api/users/login", {
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
      setEmail("");
      setPassword("");
      console.log("user logged in successfully");
      navigate("/home");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitLogin}>
        <Card
          sx={{
            mt: 5,
            marginLeft: "10%",
            color: "navy",
            bgcolor: "#EDE9FF",
            border: "1px solid navy",
            width: "75%",
          }}
        >
          <CardHeader subheader="Welcome back! :)" title="Login" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  // helperText="Please specify the habit title"
                  label="Username"
                  name="username"
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
                  label="Password"
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
              Log in
            </Button>
          </Box>
        </Card>
      </form>
      {error && error}
    </div>
  );
}

export default LoginForm;
