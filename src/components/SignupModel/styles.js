import styled from 'styled-components';

export const ModalOverlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 1000;
`;

export const ModalContainer = styled.div`
   background: white;
   padding: 2rem;
   border-radius: 10px;
   width: 475px;
   max-width: 100%;
   text-align: center;
   position: relative;
`;

export const CloseButton = styled.button`
   position: absolute;
   top: 10px;
   right: 15px;
   background: transparent;
   font-size: 20px;
   cursor: pointer;
   border: 1px solid #95959529;
   padding: 2px 8px;
   border-radius: 17px;
   color: black;
`;

export const Label = styled.label`
   display: block;
   text-align: left;
   margin-top: 10px;
`;

export const Input = styled.input`
   width: 100%;
   padding: 18px;
   margin-top: 5px;
   border: 1px solid #fffefe1c;
   border-radius: 5px;
   background-color: #f2f2f2;
`;

export const PasswordContainer = styled.div`
   position: relative;
   width: 100%;
`;

export const TogglePassword = styled.span`
   position: absolute;
   right: 10px;
   top: 50%;
   transform: translateY(-50%);
   cursor: pointer;
   font-size: 18px;
   color: #555;

   &:hover {
      color: #0d928d;
   }
`;

export const CheckboxContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   margin-top: 10px;
   font-size: 14px;
   text-align: left;
`;

export const Button = styled.button`
   width: 100%;
   padding: 12px;
   margin-top: 15px;
   background: #0d928d;
   color: white;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: 0.3s;

   &:hover {
      background: #12b28c;
   }
`;

export const FooterText = styled.p`
   margin-top: 15px;
   font-size: 14px;
   color: #555;
   cursor: pointer;

   span {
      color: #0d928d;
      font-weight: bold;
      cursor: pointer;
   }
`;
