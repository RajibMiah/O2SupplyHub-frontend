import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
   text-align: center;
   font-family: 'Poppins', sans-serif;
   padding: 0; /* Default: Small Screens (Mobile) */

   @media (min-width: 768px) {
      padding: 0.5rem; /* Medium Screens (Tablets) */
   }

   @media (min-width: 1024px) {
      padding: 0.5rem;
   }
   @media (min-width: 1400px) {
      padding: 3rem 7rem; /* Large Screens (Desktops & Above) */
   }
`;

export const Title = styled.h2`
   color: #0d928d;
   font-weight: bold;
   padding: 8px;
`;

export const Subtitle = styled.p`
   color: #2c2c2e;
   padding: 8px;
`;

export const StepsContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 10px;

   @media (min-width: 1536px) {
      /* 2XL Screens */
      width: 90%;
   }
`;

export const Steps = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   margin: 0 auto;
   flex-wrap: wrap;
   margin: 0 auto;
   margin: 20px 0;
`;

export const StepWrapper = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: nowrap; /* Prevent wrapping */
`;

export const Step = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   background: ${(props) => (props.active ? '#0d928d' : '#CCCCCC')};
   color: ${(props) => (props.active ? 'white' : '#666666')};
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 14px;
   font-weight: bold;
   margin: 0 8px;
`;

export const StepText = styled.span`
   color: ${(props) => (props.active ? '#12B28C' : '#666666')};
   font-size: 14px;
   font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
   white-space: nowrap; /* Prevent text from wrapping */
`;

export const StepLine = styled.div`
   width: 60px; /* Default */
   height: 2px;
   background: none; /* Remove solid background */
   border-top: 2px dashed ${(props) => (props.active ? '#12B28C' : '#CCCCCC')}; /* Dashed Line */
   margin: 0 5px;

   @media (max-width: 768px) {
      /* Responsive Adjustment */
      width: 40px;
   }

   @media (min-width: 1024px) {
      /* Large Screens */
      width: 80px;
   }
`;

export const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin: 3.5rem auto;
   width: 90%;
   @media (min-width: 2200px) {
      width: 55%;
   }
`;

export const Layout = styled.div`
   display: flex;
   justify-content: space-around;

   @media (max-width: 768px) {
      flex-direction: column;
   }

   // .slick-list {
   //    display: flex !important;
   //    width: 100% !important;
   // }
   .slick-slider {
      width: 26%;
   }
`;

export const ImageContainer = styled.div`
   img {
      width: 100%;
      height: auto;
      border-radius: 10px;
   }
`;

export const MotionImgContainer = styled(motion.img)`
   width: '100%';
   borderradius: '10px';
   @media (max-width: 768px) {
      width: 40%;
   }

   &img {
      max-width: 22rem;
   }
`;

export const QuestionContainer = styled.div`
   background: #f2fdfc;
   padding: 20px;
   border-radius: 10px;
   width: 50%;
   @media (max-width: 768px) {
      width: 100%;
   }
`;

export const QuestionTitle = styled.h3`
   text-align: center;
   padding-top: 1rem;
   padding-bottom: 2.5rem;
   color: #2c2c2e;
`;

export const Options = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
   padding: 2.5rem;
`;

export const Option = styled.label`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background: white;
   border: 1px solid ${(props) => (props.selected ? props.theme.primary : '#d1d1d6')};
   border-radius: 12px;
   padding: 1.5rem;
   font-size: 14px;
   font-weight: 500;
   cursor: pointer;
   transition: all 0.3s ease-in-out;

   &:hover {
      border-color: ${(props) => props.theme.primary};
   }
`;

export const OtherOption = styled.label`
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 0 2.5rem;
`;

export const OptionText = styled.span`
   flex: 1;
   text-align: left;
   color: #2c2c2e;
`;

export const CustomRadio = styled.span`
   width: 20px;
   height: 20px;
   border: 2px solid ${(props) => props.theme.primary};
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 0.3s ease-in-out;
   background: ${(props) => (props.checked ? props.theme.primary : 'transparent')};

   &::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${(props) => (props.checked ? 'white' : 'transparent')};
      border-radius: 50%;
      transition: background 0.3s ease-in-out;
   }
`;

export const HiddenRadio = styled.input`
   display: none;

   &:checked + ${CustomRadio} {
      background: ${(props) => props.theme.primary};
   }

   &:checked + ${CustomRadio}::after {
      background: white;
   }
`;

export const ButtonContainer = styled.div`
   display: flex;
   justify-content: right;
   gap: 20px;
   width: 90%;
   margin-top: 1rem;
   margin-left: 3rem;
`;

export const Button = styled.button`
   padding: 10px 20px;
   font-size: 14px;
   font-weight: 500;
   border-radius: 6px;
   border: none;
   cursor: pointer;
   transition: background 0.3s ease-in-out;
   background: ${(props) => (props.primary ? props.theme.primary : 'white')};
   color: ${(props) => (props.primary ? 'white' : props.theme.primary)};
   border: 1px solid ${(props) => props.theme.primary};

   &:hover {
      background: ${(props) => (props.primary ? props.theme.primaryHover : '#f2fdfc')};
   }

   &:disabled {
      cursor: not-allowed;
      background: #cccccc;
      border: none;
   }
`;

/* ====================== ✅ Added Result Page Styles ====================== */
export const ResultContainer = styled.div`
   // margin: 7.5rem auto;
   // width: 90%;

   // @media (min-width: 2200px) {
   //    width: 55%;
   // }
`;

export const ResultBox = styled.div`
   background: #f2fdfc;
   padding: 2rem;
   border-radius: 10px;
   text-align: left;

   h3 {
      font-size: 18px;
      font-weight: bold;
      color: #2c2c2e;
      display: flex;
      justify-content: space-between;
   }

   p {
      font-size: 16px;
      color: #2c2c2e;
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
   }

   button {
      background: #12b28c;
      color: white;
      border: none;
      padding: 6px 12px;
      font-size: 14px;
      cursor: pointer;
      border-radius: 5px;
   }
`;

export const QuantitySelector = styled.div`
   display: inline-flex;
   align-items: center;
   //border: 1px solid #12b28c;

   overflow: hidden;
   background: #f2fdfc;

   button {
      background: #12b28c7d;
      color: white;
      border: none;
      padding: 6px 12px;
      font-size: 14px;
      border-radius: 24px;
      cursor: pointer;
      transition: 0.3s;
   }

   button:hover {
      background: #0d928d;
   }

   span {
      padding: 6px 12px;
      font-size: 16px;
      font-weight: bold;
      color: #2c2c2e;
   }
`;

export const KeyBenefits = styled.div`
   background: #f2fdfc;
   padding: 2rem;
   border-radius: 10px;
   margin-top: 2rem;
   text-align: left;

   h4 {
      font-size: 18px;
      font-weight: bold;
      color: #2c2c2e;
      margin-bottom: 1rem;
   }

   ul {
      list-style-type: disc;
      padding-left: 20px;
      color: #2c2c2e;
   }

   li {
      font-size: 14px;
      margin-bottom: 8px;
   }
`;

/*======================= ✅ Added Result Page Styles ====================== */
// Styled Components Fixes

export const HeaderSection = styled.div`
   text-align: center;
   color: #0d928d;
`;

export const ContentWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   padding-top: 2.5rem;
   align-items: center;
   //margin: 14px 3.5rem;

   @media (min-width: 2200px) {
      margin: 0;
   }
`;

export const ImageWrapper = styled(ImageContainer)`
   text-align: center;
   padding: 2rem 2rem;
   background: #ffffff;
   border-radius: 12px;
   border: 2px solid #dfdfdf;
   margin: auto;
   height: 40rem;
   display: flex;

   img {
      display: block;
      margin: 0 auto;
   }
`;

export const DetailsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
`;
export const BenefitItem = styled.li`
   display: flex;
   align-items: center;
   gap: 8px;
   font-size: 14px;
   color: #333;
   margin: 8px 0;

   svg {
      color: #0d928d;
   }
`;

export const TitleWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   h3 {
      font-size: 18px;
      font-weight: 400;
   }
`;
export const PriceWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 5px;
   font-size: 16px;
   font-weight: bold;
   margin-top: 8px;
`;
export const RetailPrice = styled.span`
   color: #0d928d;
   font-size: 18px;
`;

export const OrText = styled.span`
   font-size: 23px;
   width: 100%;
   display: flex;
   justify-content: flex-end;
   padding-right: 3rem;
   color: #0d928d;
`;

export const LeasePrice = styled.span`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   color: #0d928d;
   font-size: 16px;
   span {
      font-size: 18px;
      font-weight: 400;
   }
`;

export const QuantityContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 10px;
   font-size: 14px;
`;
