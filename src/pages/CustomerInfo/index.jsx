import useCustomerForm from '@hooks/useCustomerForm';

import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { updateCustomerInfo } from '@/redux/slices/customerInfoSlice';

import {
   Button,
   ButtonGroup,
   CheckboxContainer,
   Container,
   HeaderSection,
   LineBreak,
   MainContainer,
   Section,
} from '@/components/CustomerInformation/styles';
import { submitCustomerInfo } from '@redux/thunks/customerInfo';
import ContractInformation from '@/components/CustomerInformation/ContractInfo';
import CustomerContactInfo from '@/components/CustomerInformation/CustomerContactInfo';
import CustomerBilingInfo from '@/components/CustomerInformation/CustomerBilingInfo';
import { useDispatch } from 'react-redux';
import { setRegistertion } from '@/redux/slices/authSlice';

const CustomerInformation = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { formData, handleInputChange, handleToggleShipping, errors, validateForm } =
      useCustomerForm();

   const handleNext = async () => {
      if (!validateForm()) {
         return;
      }

      console.log('Submitted Form Data:', formData);
      const { meta, payload } = await dispatch(submitCustomerInfo(formData));
      if (meta.requestStatus === 'fulfilled') {
         dispatch(setRegistertion(payload));
         navigate('/checkout');
      }
   };

   const handlePrevPage = () => {
      navigate(-1);
   };

   return (
      <MainContainer>
         <Container>
            <HeaderSection>
               <h2>Customer Information</h2>
               <p>Please fill in detail accurately to avoid any delays or shipping errors.</p>
            </HeaderSection>

            <ContractInformation
               errors={errors}
               formData={formData}
               handleInputChange={handleInputChange}
            />

            <LineBreak />
            <CustomerContactInfo
               errors={errors}
               formData={formData}
               handleInputChange={handleInputChange}
            />
            <LineBreak />
            <CustomerBilingInfo
               errors={errors}
               formData={formData}
               handleInputChange={handleInputChange}
               handleToggleShipping={handleToggleShipping}
            />
            <LineBreak />

            <Section>
               <h3>Shipping Instruction</h3>

               {/* ✅ Construction Site */}
               <CheckboxContainer>
                  <label>
                     <div>Construction Site</div>
                     <div>
                        <input
                           type="radio"
                           name="instructions.constructionSite"
                           checked={formData.instructions.constructionSite === true}
                           onChange={() =>
                              handleInputChange({
                                 target: { name: 'instructions.constructionSite', value: true },
                              })
                           }
                        />
                        Yes
                        <input
                           type="radio"
                           name="instructions.constructionSite"
                           checked={formData.instructions.constructionSite === false}
                           onChange={() =>
                              handleInputChange({
                                 target: { name: 'instructions.constructionSite', value: false },
                              })
                           }
                        />
                        No
                     </div>
                  </label>
               </CheckboxContainer>

               {/* ✅ Lift Gate Service */}
               <CheckboxContainer>
                  <label>
                     <div>Lift Gate Service</div>
                     <div>
                        <input
                           type="radio"
                           name="instructions.liftGate"
                           checked={formData.instructions.liftGate === true}
                           onChange={() =>
                              handleInputChange({
                                 target: { name: 'instructions.liftGate', value: true },
                              })
                           }
                        />
                        Yes
                        <input
                           type="radio"
                           name="instructions.liftGate"
                           checked={formData.instructions.liftGate === false}
                           onChange={() =>
                              handleInputChange({
                                 target: { name: 'instructions.liftGate', value: false },
                              })
                           }
                        />
                        No
                     </div>
                  </label>
               </CheckboxContainer>

               {/* ✅ Inside Delivery */}
               <CheckboxContainer>
                  <label>
                     <div>Inside Delivery (Additional Charge Will Apply)</div>
                     <div>
                        <input
                           type="radio"
                           name="instructions.insideDelivery"
                           checked={formData.instructions.insideDelivery === true}
                           onChange={() =>
                              handleInputChange({
                                 target: { name: 'instructions.insideDelivery', value: true },
                              })
                           }
                        />
                        Yes
                        <input
                           type="radio"
                           name="instructions.insideDelivery"
                           checked={formData.instructions.insideDelivery === false}
                           onChange={() =>
                              handleInputChange({
                                 target: { name: 'instructions.insideDelivery', value: false },
                              })
                           }
                        />
                        No
                     </div>
                  </label>
               </CheckboxContainer>

               {/* ✅ White Glove Service */}
               <CheckboxContainer>
                  <label>
                     <div>White Glove (Additional Charge Will Apply)</div>
                     <div>
                        <input
                           type="radio"
                           name="instructions.whiteGlove"
                           checked={formData.instructions.whiteGlove === true}
                           onChange={() =>
                              handleInputChange({
                                 target: { name: 'instructions.whiteGlove', value: true },
                              })
                           }
                        />
                        Yes
                        <input
                           type="radio"
                           name="instructions.whiteGlove"
                           checked={formData.instructions.whiteGlove === false}
                           onChange={() =>
                              handleInputChange({
                                 target: { name: 'instructions.whiteGlove', value: false },
                              })
                           }
                        />
                        No
                     </div>
                  </label>
               </CheckboxContainer>
            </Section>

            <ButtonGroup>
               <Button onClick={handlePrevPage}>Prev</Button>
               <Button primary onClick={handleNext}>
                  Next
               </Button>
            </ButtonGroup>
         </Container>
      </MainContainer>
   );
};

export default CustomerInformation;
