import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { History } from "../pages/History";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}
