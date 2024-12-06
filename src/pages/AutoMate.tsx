import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

// Define interfaces for credentials and user data
interface LoginCredentials {
  email: string;
  password: string;
}

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

// Define props interface for the AutoMate component
interface AutoMateProps {
  onLogin: (credentials: LoginCredentials) => void;
  onSignUp: (userData: SignUpData) => void;
}

const AutoMate: React.FC<AutoMateProps> = ({ onLogin, onSignUp }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleToggle = (): void => {
    setIsLogin(prevState => !prevState);
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>{isLogin ? "Login to Milky Tea-rex" : "Sign up for Milky Tea-rex"}</h2>
        <button 
          onClick={handleToggle} 
          className="toggle-button"
        >
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