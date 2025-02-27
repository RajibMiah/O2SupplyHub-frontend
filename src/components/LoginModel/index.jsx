import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginModal, setSignupModal, setForgetModel } from '@redux/slices/uiSlice';
import { motion } from 'framer-motion';
import { setCustomerContact } from '@redux/slices/customerInfoSlice';

import Spinner from '@/components/Spinner';
import {
   ModalOverlay,
   ModalContainer,
   CloseButton,
   Input,
   Label,
   CheckboxContainer,
   Button,
   FooterText,
   PasswordContainer,
   TogglePassword,
   RememberContainer,
   ForgetLink,
} from './styles';
import { loginUser } from '@/redux/thunks/auth';

const LoginModal = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { loading } = useSelector((state) => state.auth);

   const { loginModal } = useSelector((state) => state.ui);
   const [formData, setFormData] = useState({
      email: '',
      password: '',
      rememberMe: false,
   });
   const [showPassword, setShowPassword] = useState(false);

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: type === 'checkbox' ? checked : value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const { meta, payload } = await dispatch(loginUser(formData));

      if (meta.requestStatus === 'fulfilled') {
         const { user } = payload;

         dispatch(setCustomerContact(user));
      } else if (meta.requestStatus === 'rejected') {
         alert('Something went wrong , login is not possible');
      }

      dispatch(setLoginModal(false));
   };

   const handleCancel = () => {
      dispatch(setLoginModal(false));
      navigate(-1);
   };
   const handleRedirect = () => {
      dispatch(setLoginModal(false));
      dispatch(setSignupModal(true));
   };

   const handleForgetModel = () => {
      dispatch(setLoginModal(false));
      dispatch(setForgetModel(true));
   };

   if (loading) {
      return <Spinner />;
   }
   return (
      loginModal && (
         <ModalOverlay>
            <motion.div
               initial={{ opacity: 0, y: -50 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -50 }}
               transition={{ duration: 0.3 }}
            >
               <ModalContainer>
                  <CloseButton onClick={handleCancel}>×</CloseButton>
                  <h2>Login</h2>
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

                     <Label>Password</Label>
                     <PasswordContainer>
                        <Input
                           type={showPassword ? 'text' : 'password'}
                           name="password"
                           placeholder="Enter password"
                           value={formData.password}
                           onChange={handleChange}
                           required
                        />
                        <TogglePassword onClick={() => setShowPassword(!showPassword)}>
                           {showPassword ? '👁️' : '👁️‍🗨️'}
                        </TogglePassword>
                     </PasswordContainer>

                     <CheckboxContainer>
                        <RememberContainer>
                           <input
                              type="checkbox"
                              name="rememberMe"
                              checked={formData.rememberMe}
                              onChange={handleChange}
                           />
                           <span>Remember me</span>
                        </RememberContainer>
                        <ForgetLink onClick={handleForgetModel} href="/forgot-password">
                           Forgot Password?
                        </ForgetLink>
                     </CheckboxContainer>

                     <Button type="submit">Log in</Button>
                  </form>
                  {/* {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                  {error && <p style={{ color: 'red' }}>{error}</p>} */}
                  <FooterText>
                     Don&apos;t have an account?{' '}
                     <span style={{ cursor: 'pointer' }} onClick={handleRedirect}>
                        Sign up
                     </span>
                  </FooterText>
               </ModalContainer>
            </motion.div>
         </ModalOverlay>
      )
   );
};

export default LoginModal;
