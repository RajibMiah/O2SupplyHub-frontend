import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginModal, setSignupModal } from '@redux/slices/uiSlice';

import { motion } from 'framer-motion';
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

const LoginModal = () => {
   const dispatch = useDispatch();

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

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Login Data:', formData);
      dispatch(setLoginModal(false)); // Close modal after submit
   };

   const handleRedirect = () => {
      dispatch(setLoginModal(false));
      dispatch(setSignupModal(true));
   };
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
                  <CloseButton onClick={() => dispatch(setLoginModal(false))}>×</CloseButton>
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
                        <ForgetLink href="/forgot-password">Forgot Password?</ForgetLink>
                     </CheckboxContainer>

                     <Button type="submit">Log in</Button>
                  </form>

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
