import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function SignupForm() {
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();

const user = {firstName, lastName, username, password}

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
    setFirstName("");
    setLastName("");
    setUsername("");
    setPassword("");
    console.log("user logged in successfully");
}}

  return (
    <div><form onSubmit={handleSubmit}> 
    <Box sx={{ mt: 5}}>
    <label> First Name</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />  
        <label> Last Name</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />  
        <label> Login</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />  
        <label>Password</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />  
       
       <Button type="submit">Log in</Button>
    </Box>
    </form>
    {error && error}</div>
  )
}

export default SignupForm