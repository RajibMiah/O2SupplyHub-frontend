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
                  placeholder="Title"
                  name="customer.contact.title"
                  value={formData?.customer?.contact?.title}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.title'] && (
                  <ErrorMessage>{errors['customer.contact.title']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="Name"
                  name="customer.contact.name"
                  value={formData?.customer?.contact?.name}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.name'] && (
                  <ErrorMessage>{errors['customer.contact.name']}</ErrorMessage>
               )}
            </div>

            {/* <div>
               <InputField
                  placeholder="Phone number"
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
            </div> */}
         </Grid>
         <InlineGrid>
            <div>
               <InputField
                  placeholder="Phone number"
                  name="customer.contact.phone"
                  value={formData?.customer?.contact?.phone}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.phone'] && (
                  <ErrorMessage>{errors['customer.contact.phone']}</ErrorMessage>
               )}
            </div>
         </InlineGrid>
         <InlineGrid>
            <div>
               <InputField
                  placeholder="Email address"
                  name="customer.contact.email"
                  value={formData?.customer?.contact?.email}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contact.email'] && (
                  <ErrorMessage>{errors['customer.contact.email']}</ErrorMessage>
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
            title: PropTypes.string,
            name: PropTypes.string,
            phone: PropTypes.string,
            email: PropTypes.string,
         }),
      }),
   }).isRequired,
   errors: PropTypes.object.isRequired, // ✅ Ensure errors are passed
   handleInputChange: PropTypes.func.isRequired,
};

export default CustomerContactInfo;
