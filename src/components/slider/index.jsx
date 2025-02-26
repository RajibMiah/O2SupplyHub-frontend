import PropTypes from 'prop-types';
import styled from 'styled-components';

const Slider = ({ value, min, max, onChange }) => {
   return (
      <SliderContainer>
         <SliderTrack />
         <SliderInput type="range" min={min} max={max} value={value} onChange={onChange} />
         <SliderThumb style={{ left: `${((value - min) / (max - min)) * 100}%` }} />
      </SliderContainer>
   );
};

// Prop Types for validation
Slider.propTypes = {
   value: PropTypes.number.isRequired,
   min: PropTypes.number.isRequired,
   max: PropTypes.number.isRequired,
   onChange: PropTypes.func.isRequired,
};

// Styled Components
const SliderContainer = styled.div`
   position: relative;
   padding: 1rem 0;
   width: 100%;
`;

const SliderTrack = styled.div`
   height: 5px;
   background: #d1d5db;
   border-radius: 5px;
   width: 100%;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
`;

const SliderInput = styled.input`
   width: 100%;
   opacity: 0;
   position: absolute;
   top: 0;
   left: 0;
   cursor: pointer;
   z-index: 2;
`;

const SliderThumb = styled.div`
   position: absolute;
   width: 20px;
   height: 20px;
   background: #14b8a6;
   border-radius: 50%;
   transform: translate(-50%, -50%);
   border: 2px solid white;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
   top: 50%;
`;

export default Slider;
