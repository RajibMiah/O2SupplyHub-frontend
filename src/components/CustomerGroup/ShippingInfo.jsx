import InputField from '@/components/InputField';
import SectionWrapper from '@/components/CustomerGroup/SelectionWrapper';
import PropTypes from 'prop-types';

const ShippingInformation = ({ formData, handleInputChange }) => {
   return (
      <SectionWrapper title="Shipping Information">
         <div className="grid">
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
         </div>
      </SectionWrapper>
   );
};
ShippingInformation.propTypes = {
   formData: PropTypes.shape({
      shipping: PropTypes.shape({
         facilityName: PropTypes.string,
         streetAddress: PropTypes.string,
         city: PropTypes.string,
         state: PropTypes.string,
         zip: PropTypes.string,
         country: PropTypes.string,
      }),
   }),
   handleInputChange: PropTypes.func.isRequired,
};

export default ShippingInformation;
