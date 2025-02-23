import styled from 'styled-components';

const PaymentContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   max-width: 25rem;
   text-align: center;
   margin-top: 1.5rem;
`;

const PayButton = styled.button`
   width: 100%;
   padding: 12px;
   background: #0d928d;
   color: white;
   font-size: 14px;
   font-weight: bold;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: background 0.3s ease;

   &:hover {
      background: #098675;
   }
`;

const Disclaimer = styled.p`
   font-size: 12px;
   color: #666;
   margin-top: 10px;
   text-align: center;
   max-width: 90%;
`;

const CardComponent = () => {
   const onClick = () => {
      alert('Redirecting to Payment Gateway');
   };
   return (
      <PaymentContainer>
         <PayButton onClick={onClick}>Go to Payment Gateway</PayButton>
         <Disclaimer>
            Your personal data will be used to process your order, support your experience
            throughout this website, and for other purposes described in our privacy policy.
         </Disclaimer>
      </PaymentContainer>
   );
};

export default CardComponent;
