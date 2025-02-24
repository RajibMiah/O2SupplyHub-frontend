import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
   width: 100%;
   padding: 14px;
   border: 1px solid #ddd;
   border-radius: 5px;
   font-size: 14px;
   outline: none;
   &focus {
      outline: none;
   }
`;

const Label = styled.label`
   font-weight: bold;
   margin-bottom: 5px;
   display: block;
   font-size: 14px;
`;

const InputField = ({ label, placeholder, name, value, onChange }) => (
   <div>
      {label && <Label>{label}</Label>}
      <Input required name={name} placeholder={placeholder} value={value} onChange={onChange} />
   </div>
);
InputField.propTypes = {
   label: PropTypes.string,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   onChange: PropTypes.func.isRequired,
};

export default InputField;
