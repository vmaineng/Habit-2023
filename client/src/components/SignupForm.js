import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function SignupForm() {
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();

const user = {firstName, lastName, username, email, password}

const response = await fetch("/api/users/signup", {
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
    setEmail("");
    console.log("user logged in successfully")
    navigate("/home")
}}

  return (
    <div>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <form onSubmit={handleSubmit}> 
    <Box sx={{ mt: 3}}>
    <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
              <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid> */}
    <label> First Name</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />  
        <label> Last Name</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />  
        <label> username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />  
        <label>Password</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />  
        <label>email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />  
       
       <Button type="submit">Sign up</Button>
       </Grid>
    </Box>
    </form>
    {error && error}
    </Box>
    </div>
  )
}

export default SignupForm