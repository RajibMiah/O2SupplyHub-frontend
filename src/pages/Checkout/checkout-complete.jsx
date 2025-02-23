import styled from 'styled-components';
import { FaCreditCard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Styled Components
const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 80vh;
`;

const Card = styled.div`
   background: #d4f3f3;
   padding: 2rem;
   border-radius: 10px;
   width: 28rem;
   text-align: center;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   position: relative;
`;

const HeaderText = styled.div`
   text-align: start;
`;

const IconWrapper = styled.div``;

const Title = styled.h2`
   margin-top: 1.5rem;
   font-size: 18px;
   font-weight: bold;
   color: #333;
`;

const Line = styled.hr`
   margin: 1rem 0;
   border: 0.5px solid #ddd;
`;

const OrderNumber = styled.p`
   font-size: 14px;
   font-weight: bold;
   margin-bottom: 1.5rem;
   color: #555;
`;

const Button = styled.button`
   width: 100%;
   padding: 12px;
   background: ${(props) => (props.primary ? '#0d928d' : 'transparent')};
   color: ${(props) => (props.primary ? 'white' : '#0d928d')};
   font-size: 14px;
   font-weight: bold;
   border: ${(props) => (props.primary ? 'none' : '2px solid #0d928d')};
   border-radius: 5px;
   cursor: pointer;
   margin-top: 10px;
   transition: background 0.3s ease;

   &:hover {
      background: ${(props) => (props.primary ? '#098675' : '#e6f7f7')};
   }
`;

const CheckoutComplete = () => {
   const navigate = useNavigate();

   return (
      <Container>
         <Card>
            <HeaderText>
               <IconWrapper>
                  <FaCreditCard size={30} color="#0d928d" />
               </IconWrapper>
               <Title>Thank You For Your Purchase</Title>
            </HeaderText>
            <Line />
            <OrderNumber>Order #123RGR231567Y Confirmed</OrderNumber>
            <Button primary>Generate Receipt</Button>
            <Button onClick={() => navigate('/')}>Back To Home</Button>
         </Card>
      </Container>
   );
};

export default CheckoutComplete;
