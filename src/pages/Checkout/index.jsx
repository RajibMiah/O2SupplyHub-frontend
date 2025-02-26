import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaCreditCard } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import CardComponent from '@/components/checkout/Card';
import FinanceForm from '@/components/checkout/Finance';
import InvoiceComponent from '@/components/checkout/Invoice';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
   position: relative;
`;

const CardContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: max-content; /* Adjust width based on child content */
   min-width: 450px; /* Ensures a minimum width */
   max-width: 50rem; /* Prevents it from growing too large */
   position: absolute;
   top: 9rem;
   padding: 1rem;

   /* Make sure children control the width */
   & > * {
      width: 100%;
   }
`;

const Card = styled.div`
   background: #f0f8f8;
   padding: 2rem;
   border-radius: 10px;
   width: 100%;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   position: relative;
`;

const BackButton = styled.button`
   position: absolute;
   top: 20px;
   left: 20px;
   background: #d4f3f3;
   border: none;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   border-radius: 50%;
   cursor: pointer;
   transition: 0.3sease;
   color: #000000;

   &:hover {
      background: #098675;
   }
`;

const IconWrapper = styled.div`
   //    position: absolute;
   //    top: -20px;
   //    left: 50%;
   //    transform: translateX(-50%);
   //    background: #e6f7f7;
   //    padding: 10px;
   //    border-radius: 50%;
   //    display: flex;
   //    align-items: center;
   //    justify-content: center;
`;

const Title = styled.h2`
   margin-top: 1.5rem;
   font-size: 1.5rem;
   font-weight: bold;
   color: #333;
`;

const Line = styled.hr`
   margin: 1rem 0;
   border: 0.5px solid #ddd;
`;

const Label = styled.p`
   font-size: 14px;
   font-weight: bold;
   text-align: left;
`;

const Options = styled.div`
   display: flex;
   margin: 1rem 0;
   gap: 14px;
`;

const RadioLabel = styled.label`
   font-size: 14px;
   display: flex;
   align-items: center;
   gap: 8px;
   cursor: pointer;

   input[type='radio'] {
      appearance: none; /* Removes default styling */
      width: 18px;
      height: 18px;
      border: 2px solid #0d928d; /* Primary color border */
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease-in-out;
   }

   input[type='radio']:checked {
      background-color: #0d928d; /* Primary color fill when checked */
      border: 2px solid #0d928d;
   }

   input[type='radio']::after {
      content: '';
      width: 10px;
      height: 10px;
      background-color: white; /* Inner white dot */
      border-radius: 50%;
      display: block;
      transition: all 0.2s ease-in-out;
   }
`;

const RenderContainer = styled.div`
   margin-top: 3rem;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

// const ContentBox = styled.div`
//    background: white;
//    padding: 2rem;
//    border-radius: 8px;
//    max-width: 450px;
//    text-align: center;
//    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//    border: 1px solid #ddd;
// `;

const CheckoutPage = () => {
   const [paymentMethod, setPaymentMethod] = useState('Card');
   const navigate = useNavigate();

   const renderPaymentComponent = () => {
      switch (paymentMethod) {
         case 'ECH':
            return <InvoiceComponent />;
         case 'Finance':
            return <FinanceForm />;
         case 'Card':
            return <CardComponent />;
         default:
            return <CardComponent />;
      }
   };

   const onBack = () => {
      navigate(-1);
   };

   return (
      <Container>
         <BackButton onClick={onBack}>
            <IoArrowBack size={20} />
         </BackButton>

         <CardContainer>
            <Card>
               <IconWrapper>
                  <FaCreditCard size={30} color="#0d928d" />
               </IconWrapper>
               <Title>Payment Methods</Title>
               <Line />
               <Label>Pay with:</Label>
               <Options>
                  <RadioLabel>
                     <input
                        type="radio"
                        name="paymentMethod"
                        value="ECH"
                        checked={paymentMethod === 'ECH'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                     />
                     Invoice
                  </RadioLabel>
                  <RadioLabel>
                     <input
                        type="radio"
                        name="paymentMethod"
                        value="Finance"
                        checked={paymentMethod === 'Finance'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                     />
                     Finance
                  </RadioLabel>
                  <RadioLabel>
                     <input
                        type="radio"
                        name="paymentMethod"
                        value="Card"
                        checked={paymentMethod === 'Card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                     />
                     Card
                  </RadioLabel>
               </Options>
               <RenderContainer>{renderPaymentComponent()}</RenderContainer>
            </Card>
         </CardContainer>
      </Container>
   );
};

export default CheckoutPage;
