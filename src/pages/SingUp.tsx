import React, { useState } from "react";

interface SignUpFormProps {
  onSignUp: (userData: { username: string; email: string; password: string }) => void;
}

const Signup = ({ onSignUp }: SignUpFormProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp({ username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg relative">
        <div className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('')` }} /> 
          {/* เพิ่มรูป background */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg" />
        <div className="relative z-10">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-2">
            Sign in to Milky Tea-rex
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Quick & Simple way to Automate your payment
          </p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="User Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>.
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              CREATE AN ACCOUNT
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="flex justify-center space-x-4">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <img src="google-logo-url" alt="Google" className="h-6 w-6" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <img src="apple-logo-url" alt="Apple" className="h-6 w-6" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <img src="facebook-logo-url" alt="Facebook" className="h-6 w-6" />
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          © 2024. All Rights Reserved. Milky Tea-rex
        </p>
      </div>
    </div>
  );
};

export default Signup;
