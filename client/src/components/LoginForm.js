import { useState } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import { useNavigate } from 'react-router-dom';
// import { Field} from 'react-final-form';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const navigate = useNavigate;

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
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mt: 6 }}>
          <label> Login</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {/* <Field name="username" required size="large" />
    <Field name="password" required size="large" /> */}
          <button type="submit">Log in</button>
        </Box>
      </form>
      {error && error}
    </div>
  );
}

export default LoginForm;
