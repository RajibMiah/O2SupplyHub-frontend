import { useDispatch } from 'react-redux';
import { setResultPage } from '@redux/slices/selectionSlice';
import { useState } from 'react';
import {
   ResultContainer,
   ImageContainer,
   ResultBox,
   KeyBenefits,
   ButtonContainer,
   Button,
   QuantitySelector,
} from '@styles/selectionStyle';

import image1 from '@assets/images/image1.jpg';

const ResultPage = () => {
   const dispatch = useDispatch();
   const [quantity, setQuantity] = useState(1);

   const increaseQuantity = () => setQuantity((prev) => prev + 1);
   const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

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
                     Recommended OC <strong>Aura® 10 Nano</strong>
                  </h3>

                  {/* ✅ Quantity Selector */}
                  <p>
                     Quantity:
                     <QuantitySelector>
                        <button onClick={decreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                     </QuantitySelector>
                  </p>

                  <p>
                     Total Retail Price: <strong>CAD $7,428.75</strong>
                  </p>
                  <p>
                     EMI Plan: <strong>CAD $619.06/mo. for 12 mo.*</strong>
                  </p>
                  <p>
                     5 Year Weekly Lease Plan: <strong>CAD $34.29</strong>
                  </p>
                  <p>
                     5 Year Monthly Lease Plan: <strong>CAD $158.77</strong>
                  </p>
               </ResultBox>

               <KeyBenefits>
                  <h4>Key Benefits for You</h4>
                  <ul>
                     <li>5-year warranty including parts/labor/shipping.</li>
                     <li>Own it for $1.00 at the end of 5 years.</li>
                     <li>Can extend lease or buy warranty.</li>
                     <li>Manufacturer covers all repair/maintenance costs.</li>
                     <li>Remote monitoring available.</li>
                  </ul>
               </KeyBenefits>

               {/* ✅ Navigation Buttons */}
               <ButtonContainer>
                  <Button onClick={() => dispatch(setResultPage(false))}>Prev</Button>
                  <Button primary>Purchase Now</Button>
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
