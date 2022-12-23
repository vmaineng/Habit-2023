import { useState } from "react";
import Box from "@mui/material/Box";
 import Button from "@mui/material/Button";
 import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
      navigate('/home')
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mt: 6 }}>
          <label> Username </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label>Password </label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
       <br />
          <Button size="small" variant="contained" type="submit">Log in</Button>
        </Box>
      </form>
      {error && error}
    </div>
  );
}

export default LoginForm;
