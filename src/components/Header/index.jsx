import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLoginModal, setSignupModal } from '@redux/slices/uiSlice';

import logo from '@assets/logo.svg';
import {
   Button,
   HeaderContainer,
   HeaderSection,
   Logo,
   LogoContainer,
   Nav,
   ProfileIcon,
} from './style';

const Header = () => {
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   const dispatch = useDispatch();

   return (
      <HeaderContainer>
         <HeaderSection>
            <LogoContainer to="/">
               <Logo src={logo} alt="MyApp Logo" />
            </LogoContainer>

            <Nav>
               {isAuthenticated ? (
                  <ProfileIcon />
               ) : (
                  <>
                     <Button onClick={() => dispatch(setLoginModal(true))}>Login</Button>
                     <Button variant="register" onClick={() => dispatch(setSignupModal(true))}>
                        Register
                     </Button>
                  </>
               )}
            </Nav>
         </HeaderSection>
      </HeaderContainer>
   );
};

export default Header;
