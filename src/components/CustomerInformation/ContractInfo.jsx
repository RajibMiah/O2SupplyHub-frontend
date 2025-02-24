import InputField from '@/components/InputField';
import PropTypes from 'prop-types';
import { Grid, InlineGrid, Section, ErrorMessage } from './styles';

const ContractInformation = ({ errors, formData, handleInputChange }) => {
   return (
      <Section>
         <h3>Contract Information</h3>
         <Grid>
            <div>
               <InputField
                  placeholder="Customer"
                  name="customer.details"
                  value={formData?.customer?.details}
                  onChange={handleInputChange}
               />
               {errors?.['customer.details'] && (
                  <ErrorMessage>{errors['customer.details']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="Contract Person(s)"
                  name="customer.contractPerson"
                  value={formData?.customer?.contractPerson}
                  onChange={handleInputChange}
               />
               {errors?.['customer.contractPerson'] && (
                  <ErrorMessage>{errors['customer.contractPerson']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="ONZ Reference #"
                  name="customer.referenceNumber"
                  value={formData?.customer?.referenceNumber}
                  onChange={handleInputChange}
               />
               {errors?.['customer.referenceNumber'] && (
                  <ErrorMessage>{errors['customer.referenceNumber']}</ErrorMessage>
               )}
            </div>

            <div>
               <InputField
                  placeholder="Prepared by"
                  name="customer.preparedBy"
                  value={formData?.customer?.preparedBy}
                  onChange={handleInputChange}
               />
               {errors?.['customer.preparedBy'] && (
                  <ErrorMessage>{errors['customer.preparedBy']}</ErrorMessage>
               )}
            </div>
         </Grid>

         <InlineGrid>
            <div>
               <InputField
                  placeholder="Location"
                  name="customer.location"
                  value={formData?.customer?.location}
                  onChange={handleInputChange}
               />
               {errors?.['customer.location'] && (
                  <ErrorMessage>{errors['customer.location']}</ErrorMessage>
               )}
            </div>
         </InlineGrid>
      </Section>
   );
};

// ✅ PropTypes Validation
ContractInformation.propTypes = {
   formData: PropTypes.shape({
      customer: PropTypes.shape({
         details: PropTypes.string,
         contractPerson: PropTypes.string,
         referenceNumber: PropTypes.string,
         preparedBy: PropTypes.string,
         location: PropTypes.string,
      }),
   }),
   errors: PropTypes.object.isRequired, // ✅ Ensure errors are passed
   handleInputChange: PropTypes.func.isRequired,
};

export default ContractInformation;
