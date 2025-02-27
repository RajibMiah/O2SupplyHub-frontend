import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginModal, setForgetModel } from '@redux/slices/uiSlice';
import { motion } from 'framer-motion';

import Spinner from '@/components/Spinner';
import {
   ModalOverlay,
   ModalContainer,
   CloseButton,
   Input,
   Label,
   Button,
   FooterText,
} from './styles';

import { forgetPassword } from '@/redux/thunks/auth';

const PasswordForgetModel = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { loading } = useSelector((state) => state.auth);

   const { forgetPassModel } = useSelector((state) => state.ui);
   const [formData, setFormData] = useState({
      email: '',
   });

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: type === 'checkbox' ? checked : value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const { meta } = await dispatch(forgetPassword(formData));

      if (meta.requestStatus === 'fulfilled') {
         handleRedirect();
      } else if (meta.requestStatus === 'rejected') {
         alert('Something went wrong !');
      }
   };

   const handleCancel = () => {
      dispatch(setForgetModel(false));
      navigate(-1);
   };

   const handleRedirect = () => {
      dispatch(setForgetModel(false));
      dispatch(setLoginModal(true));
   };

   if (loading) {
      return <Spinner />;
   }
   return (
      forgetPassModel && (
         <ModalOverlay>
            <motion.div
               initial={{ opacity: 0, y: -50 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -50 }}
               transition={{ duration: 0.3 }}
            >
               <ModalContainer>
                  <CloseButton onClick={handleCancel}>×</CloseButton>
                  <h2>Generate Password</h2>
                  <form onSubmit={handleSubmit}>
                     <Label>Email</Label>
                     <Input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                     />

                     <Button type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Reset Email'}
                     </Button>
                  </form>
                  {/* {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                  {error && <p style={{ color: 'red' }}>{error}</p>} */}
                  <FooterText>
                     Remember your account login?{' '}
                     <span style={{ cursor: 'pointer' }} onClick={handleRedirect}>
                        Login
                     </span>
                  </FooterText>
               </ModalContainer>
            </motion.div>
         </ModalOverlay>
      )
   );
};

export default PasswordForgetModel;
