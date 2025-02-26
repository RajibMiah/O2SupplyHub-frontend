import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 80vh;
   text-align: center;
`;

const Title = styled.h1`
   font-size: 6rem;
   margin: 0;
`;

const Message = styled.p`
   font-size: 1.5rem;
   margin: 1rem 0;
`;

const StyledLink = styled(Link)`
   font-size: 1.2rem;
   color: #007bff;
   text-decoration: none;

   &:hover {
      text-decoration: underline;
   }
`;

const NotFound = () => {
   return (
      <NotFoundContainer>
         <Title>404</Title>
         <Message>Oops! The page you are looking for does not exist.</Message>
         <StyledLink to="/">Go Home</StyledLink>
      </NotFoundContainer>
   );
};

export default NotFound;
