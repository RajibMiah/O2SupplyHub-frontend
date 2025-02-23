import useCustomerForm from '@hooks/useCustomerForm';
import InputField from '@/components/InputField';
// import { useDispatch } from 'react-redux';
// import { updateCustomerInfo } from '@/redux/slices/customerInfoSlice';

import {
   Button,
   ButtonGroup,
   CheckboxContainer,
   Container,
   Grid,
   HeaderSection,
   InlineGrid,
   LineBreak,
   MainContainer,
   Section,
} from '@/components/CustomerInformation/styles';

const CustomerInformation = () => {
   //    const dispatch = useDispatch();
   const { formData, handleInputChange } = useCustomerForm();

   // Handle Next Button Click
   const handleNext = () => {
      console.log('Submitted Form Data:', formData); // ✅ Logs the data in console
      alert(`DATA::\n ${JSON.stringify(formData, null, 2)}`);
      //   dispatch(updateCustomerInfo(formData));
   };

   return (
      <MainContainer>
         <Container>
            <HeaderSection>
               <h2>Customer Information</h2>
               <p>Please fill in detail accurately to avoid any delays or shipping errors.</p>
            </HeaderSection>
            <Section>
               <h3>Contract Information</h3>
               <Grid>
                  <InputField
                     placeholder="Customer"
                     name="customer.details"
                     value={formData?.customer?.details}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="Contract Person(s)"
                     name="customer.contractPerson"
                     value={formData?.customer?.contractPerson}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="ONZ Reference #"
                     name="customer.referenceNumber"
                     value={formData?.customer?.referenceNumber}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="Prepared by"
                     name="customer.preparedBy"
                     value={formData?.customer?.preparedBy}
                     onChange={handleInputChange}
                  />
               </Grid>
               <InlineGrid>
                  <InputField
                     placeholder="Location"
                     name="customer.location"
                     value={formData?.customer?.location}
                     onChange={handleInputChange}
                  />
               </InlineGrid>
            </Section>

            <LineBreak />

            <Section>
               <h3>Billing Information</h3>
               <Grid>
                  <InputField
                     placeholder="Facility Name"
                     name="billing.facilityName"
                     value={formData?.billing?.facilityName}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="Street Address"
                     name="billing.streetAddress"
                     value={formData?.billing?.streetAddress}
                     onChange={handleInputChange}
                  />

                  <InputField
                     placeholder="City"
                     name="billing.city"
                     value={formData?.billing?.city}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="State"
                     name="billing.state"
                     value={formData?.billing?.state}
                     onChange={handleInputChange}
                  />

                  <InputField
                     placeholder="Zip"
                     name="billing.zip"
                     value={formData?.billing?.zip}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="Country"
                     name="billing.country"
                     value={formData?.billing?.country}
                     onChange={handleInputChange}
                  />

                  <InputField
                     placeholder="Employer/Tax ID#"
                     name="billing.taxId"
                     value={formData?.billing?.taxId}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="Receiving Type"
                     name="billing.receivingType"
                     value={formData?.billing?.receivingType}
                     onChange={handleInputChange}
                     isDropdown={true} // If it's a dropdown, handle separately
                  />
               </Grid>

               <InlineGrid>
                  <InputField
                     placeholder="Receiving Hours of Operation"
                     name="billing.receivingHours"
                     value={formData?.billing?.receivingHours}
                     onChange={handleInputChange}
                  />
               </InlineGrid>
            </Section>

            <LineBreak />

            <Section>
               <h3>Billing Information</h3>
               <Grid>
                  <InputField
                     placeholder="Facility Name"
                     name="billing.facilityName"
                     value={formData?.billing?.facilityName}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="Street Address"
                     name="billing.streetAddress"
                     value={formData?.billing?.streetAddress}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="City"
                     name="billing.city"
                     value={formData?.billing?.city}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="State"
                     name="billing.state"
                     value={formData?.billing?.state}
                     onChange={handleInputChange}
                  />
                  <InputField
                     placeholder="Zip"
                     name="billing.zip"
                     value={formData?.billing?.zip}
                     onChange={handleInputChange}
                  />
               </Grid>

               <CheckboxContainer>
                  {/* <input
                     type="checkbox"
                     checked={formData?.billing?.differentShipping}
                     onChange={() => handleToggleShipping({ field: 'billing.differentShipping' })}
                  /> */}
                  <span>Different Shipping Address</span>
               </CheckboxContainer>

               {!formData?.billing?.differentShipping && (
                  <Section>
                     <h3>Additional Shipping Information</h3>
                     <Grid>
                        <InputField
                           placeholder="Facility Name"
                           name="shipping.facilityName"
                           value={formData?.shipping?.facilityName}
                           onChange={handleInputChange}
                        />
                        <InputField
                           placeholder="Street Address"
                           name="shipping.streetAddress"
                           value={formData?.shipping?.streetAddress}
                           onChange={handleInputChange}
                        />

                        <InputField
                           placeholder="City"
                           name="shipping.city"
                           value={formData?.shipping?.city}
                           onChange={handleInputChange}
                        />
                        <InputField
                           placeholder="State"
                           name="shipping.state"
                           value={formData?.shipping?.state}
                           onChange={handleInputChange}
                        />

                        <InputField
                           placeholder="Zip"
                           name="shipping.zip"
                           value={formData?.shipping?.zip}
                           onChange={handleInputChange}
                        />
                        <InputField
                           placeholder="Country"
                           name="shipping.country"
                           value={formData?.shipping?.country}
                           onChange={handleInputChange}
                        />

                        <InputField
                           placeholder="Employer/Tax ID#"
                           name="shipping.taxId"
                           value={formData?.shipping?.taxId}
                           onChange={handleInputChange}
                        />
                        <InputField
                           placeholder="Receiving Type"
                           name="shipping.receivingType"
                           value={formData?.shipping?.receivingType}
                           onChange={handleInputChange}
                           isDropdown={true} // If it's a dropdown, handle separately
                        />
                     </Grid>

                     <InlineGrid>
                        <InputField
                           placeholder="Receiving Hours of Operation"
                           name="shipping.receivingHours"
                           value={formData?.shipping?.receivingHours}
                           onChange={handleInputChange}
                        />
                     </InlineGrid>
                  </Section>
               )}
            </Section>

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
               <Button>Prev</Button>
               <Button primary onClick={handleNext}>
                  Next
               </Button>
            </ButtonGroup>
         </Container>
      </MainContainer>
   );
};

export default CustomerInformation;
