import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Contactus from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";
import BubblePreloader from "./Components/Preloader";

function PageLoaderWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust preloader time
    return () => clearTimeout(timer);
  }, [location.pathname]); // Runs on every route change

  return loading ? <BubblePreloader /> : children;
}

export default function App() {
  return (
    <Router>
      <PageLoaderWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </PageLoaderWrapper>
    </Router>
  );
}
