import styled from 'styled-components';
import useCustomerForm from '@hooks/useCustomerForm';
import InputField from '@/components/InputField';

const MainContainer = styled.div`
   margin: 5rem;
`;

const Container = styled.div`
   background: #f0f8f8;
   padding: 5rem;
   margin-top: 4rem;
   border-radius: 10px;
   max-width: 65rem;
   margin: auto;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   padding: 14px; /* Default padding for small screens */

   @media (min-width: 768px) {
      padding: 0.5rem; /* Medium screens (e.g., tablets) */
   }

   @media (min-width: 1024px) {
      padding: 8rem; /* Large screens (e.g., desktops) */
   }
`;

const Section = styled.div`
   margin-bottom: 25px;
   padding: 20px 0;
   border-radius: 8px;

   & h3 {
      padding: 14px 0;
   }
`;
const LineBreak = styled.hr`
   color: #bfbfbf;
`;
const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 15px;
   padding-bottom: 18px;
`;

const InlineGrid = styled(Grid)`
   padding: 18px 0;
   grid: none;
`;
const CheckboxContainer = styled.div`
   display: flex;
   //    justify-content: space-between;
   align-items: center;
   width: 100%;
   margin-top: 10px;

   label {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
   }

   div {
      display: flex;
      gap: 10px;
      align-items: center;
   }

   input {
      margin-left: 8px;
      cursor: pointer;
   }

   & span {
      padding-left: 10px;
   }
`;

const ButtonGroup = styled.div`
   display: flex;
   justify-content: end;
   gap: 18px;
`;

const Button = styled.button`
   background: ${(props) => (props.primary ? '#28a745' : '#ddd')};
   color: ${(props) => (props.primary ? 'white' : 'black')};
   padding: 14px 3rem;
   border: none;
   cursor: pointer;
   border-radius: 5px;
   font-size: 14px;
`;

const HeaderSection = styled.div`
   padding: 1rem 0;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 2rem;

   & h2 {
      color: #0d928d;
      font-size: 32px;
   }
`;

const CustomerInformation = () => {
   const { formData, handleInputChange, handleToggleShipping } = useCustomerForm();

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
                  <input
                     type="checkbox"
                     checked={formData?.billing?.differentShipping}
                     onChange={() => handleToggleShipping({ field: 'billing.differentShipping' })}
                  />
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
               <CheckboxContainer>
                  {/* Construction Site */}
                  <label>
                     <div>Construction Site</div>
                     <div>
                        <input
                           type="radio"
                           name="instructions.constructionSite"
                           value="yes"
                           checked={formData?.instructions?.constructionSite === 'yes'}
                           onChange={(e) =>
                              handleInputChange({
                                 event: e,
                                 field: 'instructions.constructionSite',
                              })
                           }
                        />
                        Yes
                        <input
                           type="radio"
                           name="instructions.constructionSite"
                           value="no"
                           checked={formData?.instructions?.constructionSite === 'no'}
                           onChange={(e) =>
                              handleInputChange({
                                 event: e,
                                 field: 'instructions.constructionSite',
                              })
                           }
                        />
                        No
                     </div>
                  </label>
               </CheckboxContainer>

               <CheckboxContainer>
                  {/* Lift Gate Service */}
                  <label>
                     <div>Lift Gate Service</div>
                     <div>
                        <input
                           type="radio"
                           name="instructions.liftGate"
                           value="yes"
                           checked={formData?.instructions?.liftGate === 'yes'}
                           onChange={(e) =>
                              handleInputChange({ event: e, field: 'instructions.liftGate' })
                           }
                        />
                        Yes
                        <input
                           type="radio"
                           name="instructions.liftGate"
                           value="no"
                           checked={formData?.instructions?.liftGate === 'no'}
                           onChange={(e) =>
                              handleInputChange({ event: e, field: 'instructions.liftGate' })
                           }
                        />
                        No
                     </div>
                  </label>
               </CheckboxContainer>

               <CheckboxContainer>
                  {/* Inside Delivery */}
                  <label>
                     <div>Inside Delivery (Additional Charge Will Apply)</div>
                     <div>
                        <input
                           type="radio"
                           name="instructions.insideDelivery"
                           value="yes"
                           checked={formData?.instructions?.insideDelivery === 'yes'}
                           onChange={(e) =>
                              handleInputChange({ event: e, field: 'instructions.insideDelivery' })
                           }
                        />
                        Yes
                        <input
                           type="radio"
                           name="instructions.insideDelivery"
                           value="no"
                           checked={formData?.instructions?.insideDelivery === 'no'}
                           onChange={(e) =>
                              handleInputChange({ event: e, field: 'instructions.insideDelivery' })
                           }
                        />
                        No
                     </div>
                  </label>
               </CheckboxContainer>

               <CheckboxContainer>
                  {/* White Glove Service */}
                  <label>
                     <div>White Glove (Additional Charge Will Apply)</div>
                     <div>
                        <input
                           type="radio"
                           name="instructions.whiteGlove"
                           value="yes"
                           checked={formData?.instructions?.whiteGlove === 'yes'}
                           onChange={(e) =>
                              handleInputChange({ event: e, field: 'instructions.whiteGlove' })
                           }
                        />
                        Yes
                        <input
                           type="radio"
                           name="instructions.whiteGlove"
                           value="no"
                           checked={formData?.instructions?.whiteGlove === 'no'}
                           onChange={(e) =>
                              handleInputChange({ event: e, field: 'instructions.whiteGlove' })
                           }
                        />
                        No
                     </div>
                  </label>
               </CheckboxContainer>
            </Section>

            <ButtonGroup>
               <Button>Prev</Button>
               <Button primary>Next</Button>
            </ButtonGroup>
         </Container>
      </MainContainer>
   );
};

export default CustomerInformation;
