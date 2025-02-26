import InputField from '@/components/InputField';
import PropTypes from 'prop-types';
import { CheckboxContainer, Grid, InlineGrid, Section, ErrorMessage } from './styles';

const CustomerBilingInfo = ({ errors, formData, handleInputChange, handleToggleShipping }) => {
   return (
      <Section>
         <h3>Billing Information</h3>
         <Grid>
            <div>
               <InputField
                  placeholder="Facility Name"
                  name="billing.facilityName" // ✅ Ensure correct name
                  value={formData?.billing?.facilityName || ''}
                  onChange={handleInputChange}
               />
               {errors?.['billing.facilityName'] && (
                  <ErrorMessage>{errors['billing.facilityName']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="Street Address"
                  name="billing.streetAddress" // ✅ Ensure correct name
                  value={formData?.billing?.streetAddress || ''}
                  onChange={handleInputChange}
               />
               {errors?.['billing.streetAddress'] && (
                  <ErrorMessage>{errors['billing.streetAddress']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="City"
                  name="billing.city" // ✅ Ensure correct name
                  value={formData?.billing?.city || ''}
                  onChange={handleInputChange}
               />
               {errors?.['billing.city'] && <ErrorMessage>{errors['billing.city']}</ErrorMessage>}
            </div>

            <div>
               <InputField
                  placeholder="State"
                  name="billing.state" // ✅ Ensure correct name
                  value={formData?.billing?.state || ''}
                  onChange={handleInputChange}
               />
               {errors?.['billing.state'] && <ErrorMessage>{errors['billing.state']}</ErrorMessage>}
            </div>

            <div>
               <InputField
                  placeholder="Zip"
                  name="billing.zip" // ✅ Ensure correct name
                  value={formData?.billing?.zip || ''}
                  onChange={handleInputChange}
               />
               {errors?.['billing.zip'] && <ErrorMessage>{errors['billing.zip']}</ErrorMessage>}
            </div>

            <div>
               <InputField
                  placeholder="Country"
                  name="billing.country" // ✅ Ensure correct name
                  value={formData?.billing?.country || ''}
                  onChange={handleInputChange}
               />
               {errors?.['billing.country'] && (
                  <ErrorMessage>{errors['billing.country']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="Employer/Tax ID#"
                  name="billing.taxId" // ✅ Ensure correct name
                  value={formData?.billing?.taxId || ''}
                  onChange={handleInputChange}
               />
               {errors?.['billing.taxId'] && <ErrorMessage>{errors['billing.taxId']}</ErrorMessage>}
            </div>
            <div>
               <InputField
                  placeholder="Receiving Type"
                  name="billing.receivingType" // ✅ Ensure correct name
                  value={formData?.billing.receivingType || ''}
                  onChange={handleInputChange}
               />
               {errors?.['billing.receivingType'] && (
                  <ErrorMessage>{errors['billing.receivingType']}</ErrorMessage>
               )}
            </div>
            <InlineGrid>
               <div>
                  <InputField
                     placeholder="Receiving Hours of Operation"
                     name="billing.receivingHours" // ✅ Ensure correct name
                     value={formData?.billing?.receivingHours || ''}
                     onChange={handleInputChange}
                  />
                  {errors?.['billing.receivingHours'] && (
                     <ErrorMessage>{errors['billing.receivingHours']}</ErrorMessage>
                  )}
               </div>
            </InlineGrid>
         </Grid>

         <CheckboxContainer>
            <input
               type="checkbox"
               checked={formData?.billing?.differentShipping}
               onChange={handleToggleShipping}
            />
            <span>Different Shipping Address</span>
         </CheckboxContainer>

         {/* ✅ Only Show Shipping Fields if "Different Shipping" is checked */}
         {formData?.billing?.differentShipping && (
            <Section>
               <h3>Additional Shipping Information</h3>
               <Grid>
                  <div>
                     <InputField
                        placeholder="Facility Name"
                        name="shipping.facilityName"
                        value={formData?.shipping?.facilityName || ''}
                        onChange={handleInputChange}
                     />
                     {errors?.['shipping.facilityName'] && (
                        <ErrorMessage>{errors['shipping.facilityName']}</ErrorMessage>
                     )}
                  </div>

                  <div>
                     <InputField
                        placeholder="Street Address"
                        name="shipping.streetAddress"
                        value={formData?.shipping?.streetAddress || ''}
                        onChange={handleInputChange}
                     />
                     {errors?.['shipping.streetAddress'] && (
                        <ErrorMessage>{errors['shipping.streetAddress']}</ErrorMessage>
                     )}
                  </div>

                  <div>
                     <InputField
                        placeholder="City"
                        name="shipping.city"
                        value={formData?.shipping?.city || ''}
                        onChange={handleInputChange}
                     />
                     {errors?.['shipping.city'] && (
                        <ErrorMessage>{errors['shipping.city']}</ErrorMessage>
                     )}
                  </div>

                  <div>
                     <InputField
                        placeholder="State"
                        name="shipping.state"
                        value={formData?.shipping?.state || ''}
                        onChange={handleInputChange}
                     />
                     {errors?.['shipping.state'] && (
                        <ErrorMessage>{errors['shipping.state']}</ErrorMessage>
                     )}
                  </div>

                  <div>
                     <InputField
                        placeholder="Zip"
                        name="shipping.zip"
                        value={formData?.shipping?.zip || ''}
                        onChange={handleInputChange}
                     />
                     {errors?.['shipping.zip'] && (
                        <ErrorMessage>{errors['shipping.zip']}</ErrorMessage>
                     )}
                  </div>

                  <div>
                     <InputField
                        placeholder="Country"
                        name="shipping.country" // ✅ Ensure correct name
                        value={formData?.shipping?.country || ''}
                        onChange={handleInputChange}
                     />
                     {errors?.['shipping.country'] && (
                        <ErrorMessage>{errors['shipping.country']}</ErrorMessage>
                     )}
                  </div>

                  <div>
                     <InputField
                        placeholder="Employer/Tax ID#"
                        name="shipping.taxId" // ✅ Ensure correct name
                        value={formData?.shipping?.taxId || ''}
                        onChange={handleInputChange}
                     />
                     {errors?.['shipping.taxId'] && (
                        <ErrorMessage>{errors['shipping.taxId']}</ErrorMessage>
                     )}
                  </div>

                  <div>
                     <InputField
                        placeholder="Receiving Type"
                        name="shipping.receivingType" // ✅ Ensure correct name
                        value={formData?.shipping?.receivingType || ''}
                        onChange={handleInputChange}
                     />
                     {errors?.['shipping.receivingType'] && (
                        <ErrorMessage>{errors['shipping.receivingType']}</ErrorMessage>
                     )}
                  </div>
               </Grid>

               <InlineGrid>
                  <div>
                     <InputField
                        placeholder="Receiving Hours of Operation"
                        name="shipping.receivingHours" // ✅ Ensure correct name
                        value={formData?.shipping?.receivingHours || ''}
                        onChange={handleInputChange}
                     />
                     {errors?.['shipping.receivingHours'] && (
                        <ErrorMessage>{errors['shipping.receivingHours']}</ErrorMessage>
                     )}
                  </div>
               </InlineGrid>
            </Section>
         )}
      </Section>
   );
};

CustomerBilingInfo.propTypes = {
   formData: PropTypes.shape({
      billing: PropTypes.shape({
         facilityName: PropTypes.string,
         streetAddress: PropTypes.string,
         city: PropTypes.string,
         state: PropTypes.string,
         zip: PropTypes.string,
         differentShipping: PropTypes.bool,
         country: PropTypes.string,
         taxId: PropTypes.string,
         receivingType: PropTypes.string,
         receivingHours: PropTypes.string,
      }),
      shipping: PropTypes.shape({
         facilityName: PropTypes.string,
         streetAddress: PropTypes.string,
         city: PropTypes.string,
         state: PropTypes.string,
         zip: PropTypes.string,
         country: PropTypes.string,
         taxId: PropTypes.string,
         receivingType: PropTypes.string,
         receivingHours: PropTypes.string,
      }),
   }).isRequired,
   errors: PropTypes.object.isRequired,
   handleInputChange: PropTypes.func.isRequired,
   handleToggleShipping: PropTypes.func.isRequired,
};

export default CustomerBilingInfo;
