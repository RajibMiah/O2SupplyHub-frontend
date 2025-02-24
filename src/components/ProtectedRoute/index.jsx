import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginModal } from '@/redux/slices/uiSlice'; // Adjust the import path as necessary

const ProtectedRoute = () => {
   const { isAuthenticated } = useSelector((state) => state.auth); // Check if user is logged in
   const dispatch = useDispatch();

   if (!isAuthenticated) {
      dispatch(setLoginModal(true));
      return; //<Navigate to="/login" replace />;
   }

   return <Outlet />;
};

export default ProtectedRoute;
