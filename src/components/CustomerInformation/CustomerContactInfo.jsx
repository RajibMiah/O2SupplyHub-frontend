import InputField from '@/components/InputField';
import PropTypes from 'prop-types';
import { Grid, InlineGrid, Section, ErrorMessage } from './styles';

const CustomerContactInfo = ({ errors, formData, handleInputChange }) => {
   return (
      <Section>
         <h3>Customer Contact Information</h3>
         <Grid>
            <div>
               <InputField
                  placeholder="Facility Name"
                  name="customer.contact.facilityName"
                  value={formData?.customer?.contact?.facilityName}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.facilityName'] && (
                  <ErrorMessage>{errors['customer.contact.facilityName']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="Street Address"
                  name="customer.contact.streetAddress"
                  value={formData?.customer?.contact?.streetAddress}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.streetAddress'] && (
                  <ErrorMessage>{errors['customer.contact.streetAddress']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="City"
                  name="customer.contact.city"
                  value={formData?.customer?.contact?.city}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.city'] && (
                  <ErrorMessage>{errors['customer.contact.city']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="State"
                  name="customer.contact.state"
                  value={formData?.customer?.contact?.state}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.state'] && (
                  <ErrorMessage>{errors['customer.contact.state']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="Zip"
                  name="customer.contact.zip"
                  value={formData?.customer?.contact?.zip}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.zip'] && (
                  <ErrorMessage>{errors['customer.contact.zip']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="Country"
                  name="customer.contact.country"
                  value={formData?.customer?.contact?.country}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.country'] && (
                  <ErrorMessage>{errors['customer.contact.country']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="Employer/Tax ID#"
                  name="customer.contact.taxId"
                  value={formData?.customer?.contact?.taxId}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.taxId'] && (
                  <ErrorMessage>{errors['customer.contact.taxId']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="Receiving Type"
                  name="customer.contact.receivingType"
                  value={formData?.customer?.contact?.receivingType}
                  onChange={handleInputChange}
                  isDropdown={true} // If it's a dropdown, handle separately
               />
               {errors?.['customer.contact.receivingType'] && (
                  <ErrorMessage>{errors['customer.contact.receivingType']}</ErrorMessage>
               )}
            </div>
         </Grid>

         <InlineGrid>
            <div>
               <InputField
                  placeholder="Receiving Hours of Operation"
                  name="customer.contact.receivingHours"
                  value={formData?.customer?.contact?.receivingHours}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.receivingHours'] && (
                  <ErrorMessage>{errors['customer.contact.receivingHours']}</ErrorMessage>
               )}
            </div>
         </InlineGrid>
      </Section>
   );
};

// ✅ Updated PropTypes
CustomerContactInfo.propTypes = {
   formData: PropTypes.shape({
      customer: PropTypes.shape({
         contact: PropTypes.shape({
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
      }),
   }).isRequired,
   errors: PropTypes.object.isRequired, // ✅ Ensure errors are passed
   handleInputChange: PropTypes.func.isRequired,
};

export default CustomerContactInfo;
