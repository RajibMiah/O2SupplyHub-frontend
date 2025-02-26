import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 15px 30px;
   background: ${(props) => props.theme.bodyBackground};
   border-bottom: 1px solid ${(props) => props.theme.borderBottom};
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

   @media print {
      display: none;
   }
`;

export const HeaderSection = styled.div`
   width: 90%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const LogoContainer = styled(Link)`
   display: flex;
   align-items: center;
   gap: 10px;
`;

export const Logo = styled.img`
   width: 5rem;
   font-size: 1.5rem;
   font-weight: bold;
   color: ${(props) => props.theme.textColor};
`;

export const Nav = styled.nav`
   display: flex;
   align-items: center;
`;

export const Button = styled.button`
   padding: 10px 20px;
   margin: 0 8px;
   ${({ variant, theme }) =>
      variant === 'register'
         ? `
       background: white;
       color: ${theme.primary};
       border: 1px solid ${theme.primary};
       
       &:hover {
         background: ${theme.primaryHover};
         color: white;
       }
     `
         : `
       background: ${theme.primary};
       color: ${theme.buttonText};
       
       &:hover {
         background: ${theme.primaryHover};
       }
     `}
`;

export const ProfileIcon = styled(FaUserCircle)`
   font-size: 28px;
   color: ${(props) => props.theme.textColor};
   cursor: pointer;
`;

export const MenuContainer = styled.div`
   position: relative;
`;

export const ProfileMenu = styled.div`
   position: absolute;
   top: 50px;
   right: 0;
   background: white;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   border-radius: 8px;
   width: 150px;
   display: flex;
   flex-direction: column;
   padding: 10px;
   z-index: 100;
`;

export const MenuItem = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   text-decoration: none;
   color: #333;
   &:hover {
      background: #f1f1f1;
   }
`;
