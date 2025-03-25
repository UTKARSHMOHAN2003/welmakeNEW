
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Contactus from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";
export default function App() {
  return (
    <div className="App">
      <Router> 

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/about" element={<AboutUs />} />

      </Routes>
    
        
     </Router>
     
    </div>
  );
}
