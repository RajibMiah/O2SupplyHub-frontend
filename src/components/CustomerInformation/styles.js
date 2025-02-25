import styled from 'styled-components';

export const MainContainer = styled.div`
   margin: 5rem;
`;

export const ErrorMessage = styled.p`
   color: red;
   font-size: 12px;
   margin-top: 5px;
`;

export const Container = styled.div`
   background: #f0f8f8;
   padding: 5rem;
   margin-top: 4rem;
   border-radius: 10px;
   max-width: 65rem;
   margin: auto;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   padding: 14px; /* Default padding for small screens */

   @media (min-width: 768px) {
      padding: 0.5rem; /* Medium screens (e.g., tablets) */
   }

   @media (min-width: 1024px) {
      padding: 8rem; /* Large screens (e.g., desktops) */
   }
`;

export const Section = styled.div`
   margin-bottom: 25px;
   padding: 20px 0;
   border-radius: 8px;

   & h3 {
      padding: 14px 0;
   }
`;
export const LineBreak = styled.hr`
   color: #bfbfbf;
`;
export const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 15px;
   padding-bottom: 18px;
`;

export const InlineGrid = styled(Grid)`
   // padding: 18px 0;
   grid: none;
`;
export const CheckboxContainer = styled.div`
   display: flex;
   //    justify-content: space-between;
   align-items: center;
   width: 100%;
   margin-top: 10px;

   label {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
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

   & span {
      padding-left: 10px;
   }
`;

export const ButtonGroup = styled.div`
   display: flex;
   justify-content: end;
   gap: 18px;
`;

export const Button = styled.button`
   background: ${(props) => (props.disabled ? '#b5b5b5' : props.primary ? '#0d928d' : '#ddd')};
   color: ${(props) => (props.disabled ? '#666' : props.primary ? 'white' : 'black')};
   padding: 14px 3rem;
   border: none;
   cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
   border-radius: 5px;
   font-size: 14px;
   transition: background 0.3s ease, color 0.3s ease;
`;

export const HeaderSection = styled.div`
   padding: 1rem 0;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 2rem;

   & h2 {
      color: #0d928d;
      font-size: 32px;
   }
`;
