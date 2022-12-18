import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useTheme } from '@mui/material';
import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  // const theme = useTheme();
  
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
