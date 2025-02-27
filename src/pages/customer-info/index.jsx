import useCustomerForm from '@hooks/useCustomerForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { submitCustomerInfo } from '@redux/thunks/customerInfo';
import { setAuthentication, setProfile } from '@/redux/slices/authSlice';
import Spinner from '@components/Spinner';

import {
   Button,
   ButtonGroup,
   CheckboxContainer,
   Container,
   HeaderSection,
   LineBreak,
   MainContainer,
   Section,
} from '@/components/CustomerGroup/styles';

import ContractInformation from '@/components/CustomerGroup/ContractInfo';
import CustomerContactInfo from '@/components/CustomerGroup/CustomerContactInfo';
import CustomerBilingInfo from '@/components/CustomerGroup/CustomerBilingInfo';

const CustomerInformation = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { loading } = useSelector((state) => state.customerInfo);
   const { formData, handleInputChange, handleToggleShipping, errors, validateForm } =
      useCustomerForm();

   const handleNext = async () => {
      if (!validateForm()) {
         return;
      }

      console.log('Submitting Form Data:', formData);
      const { customer } = formData;

      const { meta, payload } = await dispatch(submitCustomerInfo(formData));

      if (meta.requestStatus === 'fulfilled') {
         dispatch(setProfile(customer));
         dispatch(setAuthentication(payload));

         navigate('/checkout');
      } else if (meta.requestStatus === 'rejected') {
         alert('something went wrong!!');
      }
   };

   const handlePrevPage = () => {
      navigate(-1);
   };

   if (loading) {
      return <Spinner />;
   }

   return (
      <MainContainer>
         <Container>
            <HeaderSection>
               <h2>Customer Information</h2>
               <p>Please fill in details accurately to avoid any delays or shipping errors.</p>
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
               <h3>Shipping Instructions</h3>

               {[
                  { name: 'constructionSite', label: 'Construction Site' },
                  { name: 'liftGate', label: 'Lift Gate Service' },
                  {
                     name: 'insideDelivery',
                     label: 'Inside Delivery (Additional Charge Will Apply)',
                  },
                  { name: 'whiteGlove', label: 'White Glove (Additional Charge Will Apply)' },
               ].map(({ name, label }) => (
                  <CheckboxContainer key={name}>
                     <label>
                        <div>{label}</div>
                        <div>
                           <input
                              type="radio"
                              name={`instructions.${name}`}
                              checked={formData.instructions[name] === true}
                              onChange={() =>
                                 handleInputChange({
                                    target: { name: `instructions.${name}`, value: true },
                                 })
                              }
                           />
                           Yes
                           <input
                              type="radio"
                              name={`instructions.${name}`}
                              checked={formData.instructions[name] === false}
                              onChange={() =>
                                 handleInputChange({
                                    target: { name: `instructions.${name}`, value: false },
                                 })
                              }
                           />
                           No
                        </div>
                     </label>
                  </CheckboxContainer>
               ))}
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
