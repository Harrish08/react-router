
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import Port from './Port';
import About from './About';
import Dash from './Dash';
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/port" element={<Port/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Dash" element={<Dash/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
