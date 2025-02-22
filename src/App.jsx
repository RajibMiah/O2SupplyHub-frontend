import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from '@pages/profile';
import Payment from '@pages/payment';
import Invoice from '@pages/invoice';
import Login from '@pages/auth/login';
import Register from '@pages/auth/register';
import CylinderSelection from '@pages/selection';
import NotFound from './pages/NotFound';
import ProtectedRoute from '@components/ProtectedRoute';
import PublicRoute from '@components/PublicRoute'; // Import PublicRoute

const App = () => {
   return (
      <Routes>
         {/* Redirect "/" to "/cylinder-selection" automatically */}
         <Route path="/" element={<Navigate to="/cylinder-selection" replace />} />

         {/* Public Routes (Prevent access if authenticated) */}
         <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Route>

         <Route path="/cylinder-selection" element={<CylinderSelection />} />

         {/* Protected Routes (Require authentication) */}
         <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/invoice" element={<Invoice />} />
         </Route>

         {/* Not Found Page */}
         <Route path="/not-found" element={<NotFound />} />

         {/* Redirect unknown routes to "/not-found" */}
         <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
   );
};

export default App;
