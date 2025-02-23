import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   margin-top: 10px;
   padding: 10px 0;

   label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
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
`;

const CheckboxGroup = ({ label, name, formData, handleInputChange }) => {
   return (
      <CheckboxContainer>
         <label>
            <div>{label}</div>
            <div>
               <input
                  type="radio"
                  name={name}
                  value="yes"
                  checked={formData?.instructions?.[name] === 'yes'}
                  onChange={(e) => handleInputChange({ event: e, field: `instructions.${name}` })}
               />
               Yes
               <input
                  type="radio"
                  name={name}
                  value="no"
                  checked={formData?.instructions?.[name] === 'no'}
                  onChange={(e) => handleInputChange({ event: e, field: `instructions.${name}` })}
               />
               No
            </div>
         </label>
      </CheckboxContainer>
   );
};

CheckboxGroup.propTypes = {
   label: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   formData: PropTypes.object.isRequired,
   handleInputChange: PropTypes.func.isRequired,
};

export default CheckboxGroup;
