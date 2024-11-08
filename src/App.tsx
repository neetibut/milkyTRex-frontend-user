import React, { useState } from "react";
import Home from "./pages/Home";
import SignUpForm from "./pages/SingUp";
import LoginForm from "./pages/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (credentials: { email: string; password: string }) => {
    console.log("Login with:", credentials);
  };

  const handleSignUp = (userData: { username: string; email: string; password: string }) => {
    console.log("Sign Up with:", userData);
  };

  return (
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
      <Home />
    </div>
  );
}

export default App;
