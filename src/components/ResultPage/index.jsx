import { useDispatch, useSelector } from 'react-redux';
import {
   incrementPriceByQty,
   decrementPriceByQty,
   setResultPage,
} from '@redux/slices/selectionSlice';

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

import image1 from '@assets/images/image1.jpg';
import { FaCheckCircle } from 'react-icons/fa';

const ResultPage = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { quantity, selectedOxygenGen } = useSelector((state) => state.selection);

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
                        <strong>{selectedOxygenGen.model}</strong>
                     </h3>
                     <RetailPrice>CAD ${selectedOxygenGen.priceMSRP.toFixed(2)}</RetailPrice>
                  </TitleWrapper>

                  <OrText>Or</OrText>

                  <PriceWrapper>
                     <LeasePrice>
                        <span>5 Year Monthly Lease Plan</span>
                        <span>CAD ${selectedOxygenGen.leaseMonthly.toFixed(2)}</span>
                     </LeasePrice>
                     <LeasePrice>
                        <span>5 Year weekly Lease Plan</span>
                        <span>CAD ${selectedOxygenGen.leaseWeekly.toFixed(2)}</span>
                     </LeasePrice>
                  </PriceWrapper>

                  {/* Quantity Selector */}
                  <QuantityContainer>
                     <p>Quantity</p>
                     <QuantitySelector>
                        <button onClick={() => dispatch(decrementPriceByQty())}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => dispatch(incrementPriceByQty())}>+</button>
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
