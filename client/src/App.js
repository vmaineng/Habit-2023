import "./App.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from "./pages/Home"
import Landingpage from "./pages/Landingpage";

function App() {
  return <div className="App">
<BrowserRouter>

<Landingpage />
<Routes>
  {/* <Route path = "/" element={<Home />}> */}

  {/* </Route> */}
</Routes>
</BrowserRouter>
  </div>;
}

export default App;
