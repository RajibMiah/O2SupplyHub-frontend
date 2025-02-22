import { Message, NotFoundContainer, StyledLink, Title } from './style';

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
