import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from '@pages/profile';
import CylinderSelection from '@pages/selection';
import NotFound from './pages/NotFound';
import ProtectedRoute from '@components/ProtectedRoute';
import CustomerInfo from '@pages/CustomerInfo';
import Checkout from '@pages/Checkout';
import CheckoutComplete from '@pages/Checkout/checkout-complete';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/cylinder-selection" replace />} />
         <Route path="/cylinder-selection" element={<CylinderSelection />} />

         {/* Protected Routes (Require authentication) */}
         <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/customer-info" element={<CustomerInfo />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-complete" element={<CheckoutComplete />} />
         </Route>

         {/* Not Found Page */}
         <Route path="/not-found" element={<NotFound />} />

         {/* Redirect unknown routes to "/not-found" */}
         <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
   );
};

export default App;
