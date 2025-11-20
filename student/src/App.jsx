import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Navbar from "./components/navbar";
import ProtectedRoute from "./components/protectedroute";
import Home from "./components/home";
import ForgotPassword from "./components/forgetpass";
import GetStudent from "./components/getstudent";
import About from "./components/about";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      
      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
            <Navigate to="/home" replace /> : 
            <Login setIsAuthenticated={setIsAuthenticated} />
          } 
        />
        
        <Route 
          path="/register" 
          element={
            isAuthenticated ? 
            <Navigate to="/home" replace /> : 
            <Register />
          } 
        />

          <Route 
          path="/forgetpassword" 
          element={
            isAuthenticated ? 
            <Navigate to="/home" replace /> : 
            <ForgotPassword />
          } 
        />
        
        <Route 
          path="/home" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/getstudent" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <GetStudent />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/about" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <About />
            </ProtectedRoute>
          } 
        />
        
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
