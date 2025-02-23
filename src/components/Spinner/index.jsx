import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
   background-color: #fff;
`;

const Spinner = styled.div`
   width: 50px;
   height: 50px;
   border: 4px solid rgba(0, 0, 0, 0.1);
   border-left-color: #0d928d; /* Primary Color */
   border-radius: 50%;
   animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = () => {
   return (
      <SpinnerContainer>
         <Spinner />
      </SpinnerContainer>
   );
};

export default LoadingSpinner;
