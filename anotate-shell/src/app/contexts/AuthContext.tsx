// src/app/contexts/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
  ReactNode
} from 'react';

// ─── FIXED IMPORT: climb out of contexts→app→src→annotate-shell→(repo root) then into libs ───
//import api from '../../../../libs/services/src/lib/api';
// ← at the very top of AuthContext.tsx
import api from '../services/api';

// QUICK SANITY CHECK: this should print your axios instance, not "undefined"
console.log('🌐 [AuthContext] api =', api);

interface AuthContextData {
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('token');
    if (saved) setToken(saved);
  }, []);

  // const login = async (username: string, password: string) => {
  //   // This must call your axios instance. If api is undefined, this will error here.
  //   const { data } = await api.post('/auth/login', { username, password });
  //   const jwt = data.token;
  //   if (!jwt) throw new Error('No token returned');
  //   localStorage.setItem('token', jwt);
  //   setToken(jwt);
  // };

  const login = async (username: string, password: string) => {
  console.log('🌐 [AuthContext] fake login for', username);
  await new Promise(r => setTimeout(r, 500));
  const fakeToken = 'FAKE-JWT-TOKEN';
  localStorage.setItem('token', fakeToken);
  setToken(fakeToken);
};


  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{
      token,
      isAuthenticated: !!token,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
}
