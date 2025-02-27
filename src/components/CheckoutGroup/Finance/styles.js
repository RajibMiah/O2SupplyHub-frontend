import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background: #ffffff;
   padding: 1rem;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   border-radius: 24px;
`;

export const Header = styled.div`
   background: #e6f7f7;
   padding: 1.5rem;
   text-align: center;
   border-radius: 10px;
   margin-bottom: 1.5rem;
`;

export const HeaderContant = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
`;

export const Title = styled.h2`
   font-size: 1.5rem;
   font-weight: bold;
   color: #333;
`;

export const Description = styled.p`
   font-size: 14px;
   color: #555;
`;

export const DetailsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   text-align: left;
   padding-left: 1rem;
`;

export const DetailItem = styled.div`
   font-size: 14px;
   color: #333;
   display: flex;
   gap: 8px;
   align-items: center;
   &::before {
      content: '•';
      color: #0d928d;
      font-size: 18px;
   }
`;

export const Note = styled.div`
   padding: 1rem 18px;

   & p {
      font-size: 12px;
      color: #777;
      text-align: left;
   }
`;

export const InputGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 15px;
   width: 100%;
   padding: 0 18px;

   @media (max-width: 600px) {
      grid-template-columns: 1fr;
   }
`;
export const InputWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`;

export const ErrorMessage = styled.span`
   font-size: 12px;
   color: red;
   margin-top: 4px;
`;
export const Input = styled.input`
   width: 100%;
   padding: 18px;
   border: 1px solid #ccc;
   border-radius: 5px;
   font-size: 14px;
   background: white;
   outline: none;

   &:focus {
      border-color: #0d928d;
   }
`;

export const ListItemContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 1rem 0;
   gap: 6rem;
`;

export const Text = styled.div`
   font-size: 14px;
   color: #000000;
   font-weight: bold;
`;

export const SignatureSection = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   font-size: 14px;
   font-weight: bold;
   margin-top: 1.5rem;
   align-items: center;
   padding: 24px 22px;
`;

export const SignatureBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 48%; /* Keeps both boxes equal */

   & span {
      color: #121722;
      font-size: 16px;
   }
`;

export const SignatureInput = styled.input`
   width: 100%;
   padding: 10px;
   border: none; /* Removes all borders */
   border-bottom: 1px solid #33333352;
   border-radius: 0; /* Removes rounded corners */
   font-size: 14px;
   text-align: center;
   margin-bottom: 5px;
   background: transparent;
   outline: none; /* Removes all outlines */
   box-shadow: none; /* Ensures no shadow appears on focus */
`;

export const Disclaimer = styled.p`
   font-size: 12px;
   color: #666;
   margin-top: 15px;
   text-align: justify;
   padding: 0 12px;
`;

export const ContactSection = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   max-width: 900px;
   margin: auto;
   padding: 2rem 0;
   gap: 2rem;

   @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
   }
`;

export const ContactInfo = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;
   padding: 0px 40px;

   img {
      width: 120px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 10px;
   }

   h3 {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
   }

   p {
      font-size: 14px;
      color: #333;
      margin: 2px 0;
   }

   a {
      color: #0d928d;
      text-decoration: none;
      //   font-weight: bold;

      &:hover {
         text-decoration: underline;
      }
   }
`;

export const SubmitButtonContainer = styled.div`
   display: flex;
   justify-content: flex-end; /* Aligns button to the right */
   width: 100%;
   padding: 1rem 0; /* Adds spacing */
`;

export const SubmitButton = styled.button`
   padding: 12px 24px;
   background: #0d928d;
   color: white;
   font-size: 15px;
   font-weight: bold;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: background 0.3s ease;

   &:hover {
      background: #098675;
   }
`;
