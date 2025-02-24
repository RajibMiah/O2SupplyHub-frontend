import styled from 'styled-components';

// Styled Components
export const Cotainer = styled.div`
   background: #ffffff !important;
   border-radius: 20px;
   padding: 1.5rem;
   // max-width: 650px;
   width: 100%;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   font-family: 'Arial', sans-serif;
   margin: auto;
`;

export const InvoiceContainer = styled.div`
   background: #f2fdfc !important;
   padding: 1.5rem;
   border-radius: 10px;
   margin-bottom: 1.5rem;
`;

export const InvoiceHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 1rem;
   margin-bottom: 1rem;
`;

export const BillSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   background: #f2fdfc !important;
   padding: 14px 0;
   border-radius: 10px;
   margin-bottom: 1.5rem;

   @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
   }
`;

export const BillingHeader = styled.div`
   padding: 4px 0;

   p {
      padding: 4px 0;
   }
`;

export const BilingDetails = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   width: 100%;
`;

export const BillTo = styled.div`
   font-size: 14px;
   max-width: 50%;
   flex: 1;

   strong {
      font-size: 16px;
      color: #000;
   }

   p {
      padding: 4px 0;
   }
`;

export const InvoiceDates = styled.div`
   font-size: 14px;
   text-align: right;
   max-width: 50%;
   flex: 1;

   p {
      margin: 4px 0;
      padding: 8px 0;
   }

   @media (max-width: 768px) {
      text-align: left;
      max-width: 100%;
      margin-top: 10px;
   }
`;

export const Title = styled.h2`
   font-size: 1.8rem;
   font-weight: bold;
   color: #333;
`;

export const InvoiceNumber = styled.div`
   font-size: 14px;
   color: #555;
   text-align: right;

   span {
      font-weight: bold;
      color: #000;
   }
`;

export const Table = styled.table`
   width: 100%;
   border-collapse: collapse;
   margin-top: 1rem;
   font-size: 14px;

   th,
   td {
      padding: 10px;
      border-bottom: 1px solid #ddd;
   }

   th {
      font-weight: bold;
   }

   td:nth-child(1),
   td:nth-child(2),
   th:nth-child(1),
   th:nth-child(2) {
      text-align: left; /* First two columns aligned left */
   }

   td:nth-child(n + 3),
   th:nth-child(n + 3) {
      text-align: right; /* Other columns aligned right */
   }
`;

export const TotalContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   margin: 2rem 0;
`;

export const Total = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 16px;
   font-weight: bold;
   margin-top: 10px;
   padding: 12px;
   background: #f2fdfc !important;
   border-radius: 5px;
   width: 16rem;
`;

export const FooterSection = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   margin-top: 20px;
   gap: 1rem;
   font-size: 14px;

   @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
   }
`;

export const ContactInfo = styled.div`
   font-size: 12px;
   width: 50%;

   h3 {
      font-size: 14px;
      font-weight: bold;
   }

   p {
      margin: 4px 0;
   }

   a {
      color: #0d928d !important;
      text-decoration: none;
      font-weight: bold;
   }

   img {
      width: 120px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 10px;
   }
`;

export const BankDetails = styled.div`
   background: #f2fdfc !important;
   padding: 10px;
   border-radius: 5px;
   font-size: 12px;
   width: 50%;

   strong {
      font-weight: bold;
   }

   @media (max-width: 600px) {
      width: 100%;
   }
   p {
      margin: 4px 0;
      color: #5e6470;
   }
`;

export const DownloadBtnContainer = styled.div`
   display: flex;
   justify-content: flex-end; /* Aligns button to the right */
   width: 100%;
   padding: 1rem 0; /* Adds spacing */
`;

export const DownloadButton = styled.button`
   padding: 12px;
   background: #0d928d !important;
   color: white;
   font-size: 14px;
   font-weight: bold;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   margin-top: 20px;
   transition: background 0.3s ease;
   align-self: flex-end;

   &:hover {
      background: #098675;
   }

   @media (max-width: 600px) {
      width: 100%;
      align-self: center;
   }
   @media print {
      display: none;
   }
`;
