
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const { token } = useSelector((state) => state.auth); // Check if user is logged in

  return token ? <Navigate to="/profile" replace /> : <Outlet />;
};

export default PublicRoute;
