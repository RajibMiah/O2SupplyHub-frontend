import { useDispatch } from 'react-redux';
import { setResultPage } from '@redux/slices/selectionSlice';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import {
   ResultContainer,
   ImageContainer,
   ResultBox,
   KeyBenefits,
   ButtonContainer,
   Button,
   QuantitySelector,
} from '@styles/selectionStyle';
import { useNavigate } from 'react-router-dom';

import image1 from '@assets/images/image1.jpg';

const ResultPage = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [quantity, setQuantity] = useState(1);

   const increaseQuantity = () => setQuantity((prev) => prev + 1);
   const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

   const handlePurchase = async () => {
      navigate('/customer-info');
   };

   return (
      <ResultContainer>
         <HeaderSection>
            <h2>Recommended Oxygen Concentrator</h2>
         </HeaderSection>

         <ContentWrapper>
            <ImageWrapper>
               <img src={image1} alt="Oxygen Concentrator" />
            </ImageWrapper>

            <DetailsWrapper>
               <ResultBox>
                  <h3>
                     <strong>Aura® 10 Nano</strong>
                  </h3>
                  <PriceWrapper>
                     <RetailPrice>CAD $7,428.75</RetailPrice>
                     <OrText>Or</OrText>
                     <LeasePrice>5 Year Monthly Lease Plan - CAD $158.77</LeasePrice>
                  </PriceWrapper>

                  {/* Quantity Selector */}
                  <QuantityContainer>
                     <p>Quantity</p>
                     <QuantitySelector>
                        <button onClick={decreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                     </QuantitySelector>
                  </QuantityContainer>
               </ResultBox>

               {/* Key Benefits Section */}
               <KeyBenefits>
                  <h4>Key Benefits for You</h4>
                  <ul>
                     <BenefitItem>
                        <FaCheckCircle /> All units have a 5-year warranty including
                        parts/labor/shipping.
                     </BenefitItem>
                     <BenefitItem>
                        <FaCheckCircle /> Customer owns it for $1.00 at the end of the 5-year term.
                     </BenefitItem>
                     <BenefitItem>
                        <FaCheckCircle /> Customer can re-enroll into a new 5-year lease or extend
                        the warranty.
                     </BenefitItem>
                     <BenefitItem>
                        <FaCheckCircle /> Manufacturer is responsible for all repair/maintenance
                        costs.
                     </BenefitItem>
                     <BenefitItem>
                        <FaCheckCircle /> Every unit has remote monitoring for real-time
                        manufacturer tracking.
                     </BenefitItem>
                  </ul>
               </KeyBenefits>

               <ButtonContainer>
                  <Button onClick={() => dispatch(setResultPage(false))}>Prev</Button>
                  <Button primary onClick={handlePurchase}>
                     Purchase Now
                  </Button>
               </ButtonContainer>
            </DetailsWrapper>
         </ContentWrapper>
      </ResultContainer>
   );
};

export default ResultPage;

// Styled Components Fixes
import styled from 'styled-components';

const HeaderSection = styled.div`
   text-align: center;
   color: #0d928d;
`;

const ContentWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   padding-top: 2.5rem;
   align-items: center;
`;

const ImageWrapper = styled(ImageContainer)`
   text-align: center;
   padding: 2rem 4rem;
   background: #ffffff;
   border-radius: 12px;
   border: 2px solid #dfdfdf;
   margin: auto;
   margin: auto;
   img {
      width: 30rem;
      display: block;
      margin: 0 auto;
   }
`;

const DetailsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
`;
export const BenefitItem = styled.li`
   display: flex;
   align-items: center;
   gap: 8px;
   font-size: 14px;
   color: #333;
   margin: 8px 0;

   svg {
      color: #0d928d;
   }
`;
export const PriceWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 5px;
   font-size: 16px;
   font-weight: bold;
   margin-top: 8px;
`;
export const RetailPrice = styled.span`
   color: #0d928d;
   font-size: 18px;
`;

export const OrText = styled.span`
   font-size: 14px;
   color: #555;
`;

export const LeasePrice = styled.span`
   color: #0d928d;
   font-size: 16px;
`;

export const QuantityContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 10px;
   font-size: 14px;
`;
