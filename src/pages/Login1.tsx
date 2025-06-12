import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// src/config/env.ts
export const ENV = {
  BASE_URL: import.meta.env.VITE_URL || 'http://localhost:3000'
};
console.log('[ENV CONFIG]', ENV.BASE_URL);
const Login1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<any>(null); // To track login state
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = async () => {
    try {
        const response = await axios.post(`${ENV.BASE_URL}/api/users/login`, {
        email,
        password
      });

      const loggedInUser = response.data;

      alert('Login successful!');
      console.log('Logged in user:', loggedInUser);

      localStorage.setItem('user', JSON.stringify(loggedInUser));
      setUser(loggedInUser); // Update local state
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (error: any) {
      console.error('Login failed:', error);
      alert(error.response?.data?.error || 'Invalid email or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    alert('Logged out successfully!');
    navigate('/login'); // Optional: redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        {!user ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-forthtech-red">Login</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-forthtech-red focus:border-forthtech-red"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-forthtech-red focus:border-forthtech-red"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-forthtech-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
              >
                Login
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <a href="/signup" className="text-forthtech-red font-medium hover:underline">
                Sign up here
              </a>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-center mb-4 text-forthtech-red">
              You are logged in as {user.email}
            </h2>
            <button
              onClick={handleLogout}
              className="w-full bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login1;
