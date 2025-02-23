import CheckboxGroup from '@/components/CheckboxGroup';
import SectionWrapper from '@components/CustomerInformation/SelectionWrapper';
import PropTypes from 'prop-types';

const ShippingInstructions = ({ formData, handleInputChange }) => {
   return (
      <SectionWrapper title="Shipping Instructions">
         <CheckboxGroup
            label="Construction Site"
            name="instructions.constructionSite"
            formData={formData}
            handleInputChange={handleInputChange}
         />
         <CheckboxGroup
            label="Lift Gate Service"
            name="instructions.liftGate"
            formData={formData}
            handleInputChange={handleInputChange}
         />
         <CheckboxGroup
            label="Inside Delivery (Additional Charge Will Apply)"
            name="instructions.insideDelivery"
            formData={formData}
            handleInputChange={handleInputChange}
         />
         <CheckboxGroup
            label="White Glove (Additional Charge Will Apply)"
            name="instructions.whiteGlove"
            formData={formData}
            handleInputChange={handleInputChange}
         />
      </SectionWrapper>
   );
};
ShippingInstructions.propTypes = {
   formData: PropTypes.object.isRequired,
   handleInputChange: PropTypes.func.isRequired,
};

export default ShippingInstructions;
