import { useState } from "react";

// material-ui
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
    <Box sx={{ mt: 4, mb: 5}}>
    <label> First Name </label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        <br />
        <label> Last Name </label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        <br />
        <label> username </label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
        <br />
        <label>E-mail </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
       <br />
        <label>Password </label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
        <br />
       <Button size="small" variant="contained" type="submit">Sign up</Button>
    </Box>
    </form>
    </Container>
    {error && error}
    </Box> 
    </div>
  );
}

export default SignupForm;
