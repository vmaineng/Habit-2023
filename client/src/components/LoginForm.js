import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import { Field} from 'react-final-form';

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();

const user = {username, password}

const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
        "Content-Type": "application/json",
    },
})

const json = await response.json();

if (!response.ok) {
    setError(json.error)
}

if (response.ok) {
    setUsername("");
    setPassword("");
    console.log("user logged in successfully");
}
}; 

  return (
    <div>
<form onSubmit={handleSubmit}> 
<Box sx={{ mt: 6}}>
    <label> Login</label>
    <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />  
    <label>Password</label>
    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />  
    {/* <Field name="username" required size="large" />
    <Field name="password" required size="large" /> */}
   <Button type="submit">Log in</Button>
</Box>
</form>
{error && error}
    </div>
  )
}

export default LoginForm