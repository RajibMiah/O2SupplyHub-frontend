import InputField from '@/components/InputField';
import SectionWrapper from '@components/CustomerInformation/SelectionWrapper';
import PropTypes from 'prop-types';

const ContractInformation = ({ formData, handleInputChange }) => {
   return (
      <SectionWrapper title="Contract Information">
         <div className="grid">
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
            <InputField
               placeholder="Location"
               name="customer.location"
               value={formData?.customer?.location}
               onChange={handleInputChange}
            />
         </div>
      </SectionWrapper>
   );
};
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
   handleInputChange: PropTypes.func.isRequired,
};

export default ContractInformation;
