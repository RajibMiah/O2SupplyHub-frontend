import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLoginModal, setSignupModal } from '@redux/slices/uiSlice';
import { logout } from '@redux/slices/authSlice';
import logo from '@assets/logo.svg';
import {
   Button,
   HeaderContainer,
   HeaderSection,
   Logo,
   LogoContainer,
   MenuContainer,
   MenuItem,
   Nav,
   ProfileIcon,
   ProfileMenu,
} from './style';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   const dispatch = useDispatch();
   const [showMenu, setShowMenu] = useState(false);
   const menuRef = useRef(null);

   // Close menu if clicked outside
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
         }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <HeaderContainer>
         <HeaderSection>
            <LogoContainer to="/">
               <Logo src={logo} alt="MyApp Logo" />
            </LogoContainer>

            <Nav>
               {isAuthenticated ? (
                  <MenuContainer ref={menuRef}>
                     <ProfileIcon onClick={() => setShowMenu((prev) => !prev)} />
                     {showMenu && (
                        <ProfileMenu>
                           {/* <MenuItem to="/profile">Profile</MenuItem>
                           <MenuItem to="/settings">Settings</MenuItem> */}
                           <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
                        </ProfileMenu>
                     )}
                  </MenuContainer>
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
