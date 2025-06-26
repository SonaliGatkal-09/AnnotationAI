// src/app/pages/login.tsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation, Location } from 'react-router-dom';

export const Login: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  interface LocationState { from?: string }
  const state = (location.state as LocationState) || {};

  // If already logged in, skip to home
  useEffect(() => {
    if (isAuthenticated) {
      navigate(state.from ?? '/', { replace: true });
    }
  }, [isAuthenticated, navigate, location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate(state.from ?? '/', { replace: true });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit}
            className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        {error && <div className="text-red-600">{error}</div>}
        <input type="text" placeholder="Username" value={username}
               onChange={e => setUsername(e.target.value)}
               className="w-full px-3 py-2 border rounded" required />
        <input type="password" placeholder="Password" value={password}
               onChange={e => setPassword(e.target.value)}
               className="w-full px-3 py-2 border rounded" required />
        <button type="submit"
                className="w-full py-2 bg-studio-purple text-white rounded hover:bg-studio-purple-dark">
          Sign In
        </button>
      </form>
    </div>
  );
};
