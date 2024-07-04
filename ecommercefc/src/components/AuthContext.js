import { createContext } from 'react';
import { useCookies } from 'react-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies] = useCookies(['jwt_token']);
  const token = cookies['jwt_token'];

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};