import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const { token } = useSelector((state) => state.auth); // Check if user is logged in
  
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
