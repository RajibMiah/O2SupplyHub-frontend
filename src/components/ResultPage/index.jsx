import { useDispatch, useSelector } from 'react-redux';
import { setResultPage } from '@redux/slices/selectionSlice';

import {
   ResultContainer,
   // ImageContainer,
   ResultBox,
   KeyBenefits,
   ButtonContainer,
   Button,
   QuantitySelector,
   HeaderSection,
   ContentWrapper,
   ImageWrapper,
   DetailsWrapper,
   TitleWrapper,
   RetailPrice,
   OrText,
   PriceWrapper,
   LeasePrice,
   QuantityContainer,
   BenefitItem,
} from '@styles/selectionStyle';

import { useNavigate } from 'react-router-dom';
import {
   setQuantity,
   selectQuantity,
   selectTotalRetailPrice,
   selectTotalLeasePrice,
} from '@redux/slices/selectionSlice';

import image1 from '@assets/images/image1.jpg';
import { FaCheckCircle } from 'react-icons/fa';

const ResultPage = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const quantity = useSelector(selectQuantity);

   const totalRetailPrice = useSelector(selectTotalRetailPrice);
   const totalLeasePrice = useSelector(selectTotalLeasePrice);

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
                  <TitleWrapper>
                     <h3>
                        <strong>Aura® 10 Nano</strong>
                     </h3>
                     <RetailPrice>CAD ${totalRetailPrice.toFixed(2)}</RetailPrice>
                  </TitleWrapper>

                  <OrText>Or</OrText>

                  <PriceWrapper>
                     <LeasePrice>
                        <span>5 Year Monthly Lease Plan</span>
                        <span>CAD ${totalLeasePrice.toFixed(2)}</span>
                     </LeasePrice>
                  </PriceWrapper>

                  {/* Quantity Selector */}
                  <QuantityContainer>
                     <p>Quantity</p>
                     <QuantitySelector>
                        <button onClick={() => dispatch(setQuantity(quantity - 1))}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => dispatch(setQuantity(quantity + 1))}>+</button>
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
