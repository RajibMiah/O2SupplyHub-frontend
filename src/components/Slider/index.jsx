import PropTypes from 'prop-types';
import styled from 'styled-components';

const Slider = ({ value, min, max, onChange }) => {
   const percentage = ((value - min) / (max - min)) * 100;
   const divisions = Array.from({ length: max - min + 1 }, (_, i) => min + i);

   return (
      <SliderContainer>
         <SliderMarkers>
            {divisions.map((div, index) => (
               <Marker key={index} style={{ left: `${((div - min) / (max - min)) * 100}%` }}>
                  |
               </Marker>
            ))}
         </SliderMarkers>
         <SliderTrack />
         <SliderFilled style={{ width: `${percentage}%` }} />
         <SliderInput type="range" min={min} max={max} value={value} onChange={onChange} />
         <SliderThumb style={{ left: `${percentage}%` }} />
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
   padding: 2rem 0;
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
   z-index: 0;
`;

const SliderFilled = styled.div`
   height: 5px;
   background: #14b8a6;
   border-radius: 5px;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   z-index: 1;
`;

const SliderInput = styled.input`
   width: 100%;
   opacity: 0;
   position: absolute;
   top: 25px;
   left: 0;
   cursor: pointer;
   z-index: 2;
   color: black;
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
   z-index: 3;
`;

const SliderMarkers = styled.div`
   position: absolute;
   width: 100%;
   top: 40%;
   transform: translateY(-15px);
   display: flex;
   justify-content: space-between;
`;

const Marker = styled.span`
   position: absolute;
   transform: translateX(-50%);
   font-size: 14px;
   color: #6b7280;
`;

export default Slider;
