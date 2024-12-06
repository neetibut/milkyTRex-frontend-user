import React, { useState } from "react";
import Signup from "./Singup";
import Login from "./Login";

interface AutoMate{
  onLogin: (credentials: { email: string; password: string }) => void;
  onSignUp: (userData: { username: string; email: string; password: string }) => void;
}

const AutoMate: React.FC<AutoMate> = ({ onLogin, onSignUp }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>{isLogin ? "Login to Milky Tea-rex" : "Sign up for Milky Tea-rex"}</h2>
        <button onClick={handleToggle} className="toggle-button">
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </button>
      </div>

      {isLogin ? (
        <Login onLogin={onLogin} />
      ) : (
        <Signup onSignUp={onSignUp} />
      )}
    </div>
  );
};

export default AutoMate;