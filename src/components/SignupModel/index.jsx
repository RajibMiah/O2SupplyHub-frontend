import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginModal, setSignupModal } from '@redux/slices/uiSlice';
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
   // PasswordContainer,
   // TogglePassword,
} from './styles';
import { registerUser } from '@/redux/thunks/auth';

const SignupModal = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { loading } = useSelector((state) => state.auth);

   const { signupModal } = useSelector((state) => state.ui);
   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      agreeTerms: false,
   });
   // const [showPassword, setShowPassword] = useState(false);

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: type === 'checkbox' ? checked : value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const { meta, payload } = await dispatch(registerUser(formData));

      if (meta.requestStatus === 'fulfilled') {
         const { user } = payload;
         console.log('user---', user);
         dispatch(setCustomerContact(user));
      } else if (meta.requestStatus === 'rejected') {
         alert('Something went wrong , registration is not possible');
      }
      dispatch(setSignupModal(false)); // Close modal after submit
   };

   const handleCancel = () => {
      dispatch(setSignupModal(false));
      navigate('/');
   };
   const handleRedirect = () => {
      dispatch(setSignupModal(false));
      dispatch(setLoginModal(true));
   };
   if (loading) {
      return <Spinner />;
   }
   return (
      signupModal && (
         <ModalOverlay>
            <motion.div
               initial={{ opacity: 0, y: -50 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -50 }}
               transition={{ duration: 0.3 }}
            >
               <ModalContainer>
                  <CloseButton onClick={handleCancel}>×</CloseButton>
                  <h2>Sign Up</h2>
                  <form onSubmit={handleSubmit}>
                     <Label>Full Name</Label>
                     <Input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                     />

                     <Label>Email</Label>
                     <Input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                     />

                     <Label>Phone Number</Label>
                     <Input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                     />

                     <Label>Password</Label>
                     {/* <PasswordContainer>
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
                     </PasswordContainer> */}

                     <CheckboxContainer>
                        <input
                           type="checkbox"
                           name="agreeTerms"
                           checked={formData.agreeTerms}
                           onChange={handleChange}
                           required
                        />
                        <span>I agree to Terms of Service and Privacy Policy</span>
                     </CheckboxContainer>

                     <Button type="submit">Sign up</Button>
                  </form>

                  <FooterText>
                     Already have an account?{' '}
                     <span style={{ cursor: 'pointer' }} onClick={handleRedirect}>
                        Log in
                     </span>
                  </FooterText>
               </ModalContainer>
            </motion.div>
         </ModalOverlay>
      )
   );
};

export default SignupModal;
