import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import { useContext } from 'react';

const ProtectedRoute = ({ element, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
  
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  
    return <Route {...rest} element={element} />;
  };

export default ProtectedRoute;
