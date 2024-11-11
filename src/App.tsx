import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignUpForm from "./pages/SingUp";
import LoginForm from "./pages/Login";
import Start from "./pages/Start";
import Selectness from "./components/Selectness";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (credentials: { 
    email: string; 
    password: string 
    }) => {
    console.log("Login with:", credentials);
  };

  const handleSignUp = (userData: { username: string; 
    email: string; 
    password: string 
    }) => {
    console.log("Sign Up with:", userData);
  };

  return (
    <Router>
      <div className="App">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        {isLogin ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <SignUpForm onSignUp={handleSignUp} />
        )}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/selectness" element={<Selectness />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
