import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
   text-align: center;
   background-color: #f8f9fa;
`;

export const Title = styled.h1`
   font-size: 4rem;
   color: #dc3545;
   margin-bottom: 10px;
`;

export const Message = styled.p`
   font-size: 1.5rem;
   color: #6c757d;
`;

export const StyledLink = styled(Link)`
   margin-top: 20px;
   padding: 10px 20px;
   font-size: 1rem;
   text-decoration: none;
   background-color: #007bff;
   color: white;
   border-radius: 5px;
   transition: 0.3s;

   &:hover {
      background-color: #0056b3;
   }
`;
