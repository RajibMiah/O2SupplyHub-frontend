import InputField from '@/components/InputField';
import SectionWrapper from '@components/CustomerInformation/SelectionWrapper';
import PropTypes from 'prop-types';

const BillingInformation = ({ formData, handleInputChange, handleToggleShipping }) => {
   return (
      <SectionWrapper title="Billing Information">
         <div className="grid">
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
               isDropdown={true}
            />
         </div>

         <div className="checkbox">
            <input
               type="checkbox"
               checked={formData?.billing?.differentShipping}
               onChange={() => handleToggleShipping({ field: 'billing.differentShipping' })}
            />
            <span>Different Shipping Address</span>
         </div>
      </SectionWrapper>
   );
};
BillingInformation.propTypes = {
   formData: PropTypes.shape({
      billing: PropTypes.shape({
         facilityName: PropTypes.string,
         streetAddress: PropTypes.string,
         city: PropTypes.string,
         state: PropTypes.string,
         zip: PropTypes.string,
         country: PropTypes.string,
         taxId: PropTypes.string,
         receivingType: PropTypes.string,
         differentShipping: PropTypes.bool,
      }),
   }).isRequired,
   handleInputChange: PropTypes.func.isRequired,
   handleToggleShipping: PropTypes.func.isRequired,
};

export default BillingInformation;
