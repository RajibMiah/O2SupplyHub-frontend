import styled from 'styled-components';

export const Container = styled.div`
   text-align: center;
   padding: 8rem;
   font-family: 'Poppins', sans-serif;
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

export const Steps = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
`;

export const StepWrapper = styled.div`
   display: flex;
   align-items: center;
`;

export const Step = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   background: ${(props) => (props.active ? '#12B28C' : '#CCCCCC')};
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
`;

export const StepLine = styled.div`
   width: 70px;
   height: 2px;
   background: ${(props) => (props.active ? '#12B28C' : '#CCCCCC')};
   margin: 0 5px;
`;

export const ContentContainer = styled.div`
   display: flex;
   justify-content: space-around;
   gap: 5rem;
   margin: 5rem;
`;

export const ImageContainer = styled.div``;

export const QuestionContainer = styled.div`
   background: #f2fdfc;
   padding: 20px;
   border-radius: 10px;
   width: 50%;
`;

export const QuestionTitle = styled.h3`
   color: #2c2c2e;
   text-align: left;
   padding: 14px;
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
   margin-top: -3rem;
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
   text-align: center;
   padding: 4rem;
   background: #fff;
   border-radius: 12px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   max-width: 800px;
   margin: auto;
`;

export const ResultBox = styled.div`
   background: #f2fdfc;
   padding: 2rem;
   border-radius: 10px;
   margin-top: 2rem;
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

export const KeyBenefits = styled.div`
   background: #f9f9f9;
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
