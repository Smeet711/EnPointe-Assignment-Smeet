import React, { createContext, useState, useContext } from 'react';
// import { api, setAuthToken } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  const login = (mockedToken) => {
    setToken(mockedToken);
    setIsAuthenticated(true);
  };

//   const login = async (username, password) => {
//     try {
//       const response = await api.post('/login', { username, password });
//       setToken(response.data.token);
//       setAuthToken(response.data.token);
//       setIsAuthenticated(true);
//     } catch (error) {
//       throw new Error('Login failed');
//     }
//   };

  const logout = () => {
    setToken('');
    setIsAuthenticated(false);
    // setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
